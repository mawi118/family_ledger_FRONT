// src/api/auth.ts
import { Router, Request, Response } from 'express';
import { CONFIG } from '../../config/constants';
import { authClient } from './authClient';
import { promisifyGrpc } from '../shared/grpcPromisify';
import { grpcErrorToHttp } from '../shared/grpcErrors';

import type { RegisterRequest } from '../../generated/FL/v1/RegisterRequest';
import type { RegisterResponse__Output } from '../../generated/FL/v1/RegisterResponse';

import type { LoginRequest } from '../../generated/FL/v1/LoginRequest';
import type { LoginResponse__Output } from '../../generated/FL/v1/LoginResponse';
import type { User__Output } from '../../generated/FL/v1/User';

import type { RefreshRequest } from '../../generated/FL/v1/RefreshRequest';
import type { RefreshResponse__Output } from '../../generated/FL/v1/RefreshResponse';

import type { LogoutRequest } from '../../generated/FL/v1/LogoutRequest';
import type { LogoutResponse__Output } from '../../generated/FL/v1/LogoutResponse';

import type { MeRequest } from '../../generated/FL/v1/MeRequest';
import type { MeResponse__Output } from '../../generated/FL/v1/MeResponse';

const router = Router();

interface BffUserResponse {
  id: string;
  email: string;
  firstName: string;
}

interface RegisterBody {
  email: string;
  password: string;
  firstName: string;
}

interface LoginBody {
  email: string;
  password: string;
}

function setAuthCookies(res: Response, accessToken: string, refreshToken: string): void {
  res.cookie(CONFIG.ACCESS_TOKEN_COOKIE_NAME, accessToken, {
    httpOnly: true,
    secure: CONFIG.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: CONFIG.ACCESS_TOKEN_MAX_AGE,
    path: '/',
  });
  res.cookie(CONFIG.REFRESH_TOKEN_COOKIE_NAME, refreshToken, {
    httpOnly: true,
    secure: CONFIG.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: CONFIG.REFRESH_TOKEN_MAX_AGE,
    path: '/api/auth',
  });
}

function clearAuthCookies(res: Response): void {
  res.clearCookie(CONFIG.ACCESS_TOKEN_COOKIE_NAME, {
    httpOnly: true,
    secure: CONFIG.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  res.clearCookie(CONFIG.REFRESH_TOKEN_COOKIE_NAME, {
    httpOnly: true,
    secure: CONFIG.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/api/auth',
  });
}

function mapBackendUserToBff(user: User__Output): BffUserResponse {
  return {
    id: user.user_id,
    email: user.email,
    firstName: user.first_name,
  };
}

router.post(
    '/register',
    async (req: Request<{}, {}, RegisterBody>, res: Response): Promise<void> => {
      const { email, password, firstName } = req.body;

      if (!email || !password || !firstName) {
        res.status(400).json({ success: false, error: 'Все поля обязательны', statusCode: 400 });
        return;
      }

      try {
        const response = await promisifyGrpc<RegisterRequest, RegisterResponse__Output>(
            authClient,
            'Register',
            { email, password, first_name: firstName }
        );

        if (!response.user) {
          res.status(500).json({ success: false, error: 'Бэкенд вернул пустого пользователя', statusCode: 500 });
          return;
        }

        setAuthCookies(res, response.access_token, response.refresh_token);
        res.status(201).json(mapBackendUserToBff(response.user));
      } catch (err) {
        const { statusCode, error } = grpcErrorToHttp(err);
        res.status(statusCode).json({ success: false, error, statusCode });
      }
    }
);

router.post(
    '/login',
    async (req: Request<{}, {}, LoginBody>, res: Response): Promise<void> => {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ success: false, error: 'Email и пароль обязательны', statusCode: 400 });
        return;
      }

      try {
        const response = await promisifyGrpc<LoginRequest, LoginResponse__Output>(
            authClient,
            'Login',
            { email, password }
        );

        if (!response.user) {
          res.status(500).json({ success: false, error: 'Бэкенд вернул пустого пользователя', statusCode: 500 });
          return;
        }

        setAuthCookies(res, response.access_token, response.refresh_token);
        res.json(mapBackendUserToBff(response.user));
      } catch (err) {
        const { statusCode, error } = grpcErrorToHttp(err);
        res.status(statusCode).json({ success: false, error, statusCode });
      }
    }
);

router.post('/refresh', async (req: Request, res: Response): Promise<void> => {
  const refreshToken = req.cookies[CONFIG.REFRESH_TOKEN_COOKIE_NAME];

  if (!refreshToken) {
    res.status(401).json({ success: false, error: 'Не авторизован', statusCode: 401 });
    return;
  }

  try {
    const response = await promisifyGrpc<RefreshRequest, RefreshResponse__Output>(
        authClient,
        'Refresh',
        { refresh_token: refreshToken }
    );

    setAuthCookies(res, response.access_token, response.refresh_token);
    res.json({ success: true });
  } catch (err) {
    const { statusCode, error } = grpcErrorToHttp(err);
    // Куки сбрасываем только если бэкенд отклонил токен (401). При сбое бэкенда (503/500)
    // сессия может быть цела, и клиент должен иметь возможность повторить запрос.
    if (statusCode === 401) {
      clearAuthCookies(res);
    }
    res.status(statusCode).json({ success: false, error, statusCode });
  }
});

router.post('/logout', async (req: Request, res: Response): Promise<void> => {
  const refreshToken = req.cookies[CONFIG.REFRESH_TOKEN_COOKIE_NAME];

  if (refreshToken) {
    try {
      await promisifyGrpc<LogoutRequest, LogoutResponse__Output>(authClient, 'Logout', {
        refresh_token: refreshToken,
      });
    } catch (err) {
      // Не говорим «выход выполнен», если токены не отозваны, и не стираем куки:
      // иначе клиент не сможет повторить попытку, а сессия на бэкенде останется живой.
      console.error('[logout] backend revoke failed', err);
      const { statusCode, error } = grpcErrorToHttp(err);
      res.status(statusCode).json({ success: false, error, statusCode });
      return;
    }
  }

  clearAuthCookies(res);
  res.json({ success: true, message: 'Выход успешно выполнен' });
});

router.get('/me', async (req: Request, res: Response): Promise<void> => {
  const accessToken = req.cookies[CONFIG.ACCESS_TOKEN_COOKIE_NAME];

  if (!accessToken) {
    res.status(401).json({ success: false, error: 'Не авторизован', statusCode: 401 });
    return;
  }

  try {
    const response = await promisifyGrpc<MeRequest, MeResponse__Output>(authClient, 'Me', {
      access_token: accessToken,
    });

    if (!response.user) {
      res.status(500).json({ success: false, error: 'Бэкенд вернул пустого пользователя', statusCode: 500 });
      return;
    }

    res.json(mapBackendUserToBff(response.user));
  } catch (err) {
    const { statusCode, error } = grpcErrorToHttp(err);
    res.status(statusCode).json({ success: false, error, statusCode });
  }
});

export default router;