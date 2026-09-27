// src/api/auth.ts
import { Router, Request, Response } from 'express';
import { CONFIG } from '../../config/constants';
import { authClient } from './authClient';
import { promisifyGrpc } from '../shared/grpcPromisify';
import { grpcErrorToHttp } from '../shared/grpcErrors';

// Типы из сгенерированного кода
import type { RegisterRequest } from '../../generated/FL/v1/RegisterRequest';
import type { RegisterResponse__Output } from '../../generated/FL/v1/RegisterResponse';

import type { LoginRequest } from '../../generated/FL/v1/LoginRequest';
import type { LoginResponse__Output } from '../../generated/FL/v1/LoginResponse';
import type { User__Output } from '../../generated/FL/v1/User';

const router = Router();

// ---------- Типы для контракта BFF (по openapi.yaml) ----------

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

// ---------- Вспомогательные функции ----------

function setAuthCookie(res: Response, token: string): void {
  res.cookie(CONFIG.JWT_COOKIE_NAME, token, {
    httpOnly: true,
    secure: CONFIG.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: CONFIG.TOKEN_EXPIRY,
    path: '/',
  });
}

function clearAuthCookie(res: Response): void {
  res.clearCookie(CONFIG.JWT_COOKIE_NAME, {
    httpOnly: true,
    secure: CONFIG.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
}

/**
 * МАППИНГ: ответ бэкенда (snake_case) → контракт BFF (openapi.yaml).
 * user_id → id, first_name → firstName
 */
function mapBackendUserToBff(user: User__Output): BffUserResponse {
  return {
    id: user.user_id,
    email: user.email,
    firstName: user.first_name,
  };
}

// ---------- POST /auth/register ----------

router.post(
  '/register',
  async (
    req: Request<{}, {}, RegisterBody>,
    res: Response
  ): Promise<void> => {
    const { email, password, firstName } = req.body;

    if (!email || !password || !firstName) {
      res.status(400).json({
        success: false,
        error: 'Все поля обязательны',
        statusCode: 400,
      });
      return;
    }

    try {
      // ⚠️ Поле в .proto — first_name. Так как keepCase: true,
      // клиент ждёт именно first_name.
      const response = await promisifyGrpc<
        RegisterRequest,
        RegisterResponse__Output
      >(authClient, 'Register', {
        email,
        password,
        first_name: firstName,
      });

      // response.user — тип User__Output | undefined
      if (!response.user) {
        res.status(500).json({
          success: false,
          error: 'Бэкенд вернул пустого пользователя',
          statusCode: 500,
        });
        return;
      }

      setAuthCookie(res, response.token);
      res.status(201).json(mapBackendUserToBff(response.user));
    } catch (err) {
      const { statusCode, error } = grpcErrorToHttp(err);
      res.status(statusCode).json({
        success: false,
        error,
        statusCode,
      });
    }
  }
);

// ---------- POST /auth/login ----------

router.post(
  '/login',
  async (
    req: Request<{}, {}, LoginBody>,
    res: Response
  ): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        error: 'Email и пароль обязательны',
        statusCode: 400,
      });
      return;
    }

    try {
      const response = await promisifyGrpc<
        LoginRequest,
        LoginResponse__Output
      >(authClient, 'Login', { email, password });

      if (!response.user) {
        res.status(500).json({
          success: false,
          error: 'Бэкенд вернул пустого пользователя',
          statusCode: 500,
        });
        return;
      }

      setAuthCookie(res, response.token);
      res.json(mapBackendUserToBff(response.user));
    } catch (err) {
      const { statusCode, error } = grpcErrorToHttp(err);
      res.status(statusCode).json({
        success: false,
        error,
        statusCode,
      });
    }
  }
);

// ---------- POST /auth/logout (не трогаем) ----------

router.post('/logout', (req: Request, res: Response): void => {
  clearAuthCookie(res);
  res.json({
    success: true,
    message: 'Выход успешно выполнен',
  });
});

// ---------- GET /auth/me (не трогаем по заданию) ----------

router.get('/me', (req: Request, res: Response): void => {
  const token = req.cookies[CONFIG.JWT_COOKIE_NAME];

  if (!token) {
    res.status(401).json({
      success: false,
      error: 'Не авторизован',
      statusCode: 401,
    });
    return;
  }

  res.status(501).json({
    success: false,
    error: 'Не реализовано',
    statusCode: 501,
  });
});

export default router;