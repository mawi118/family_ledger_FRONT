import { Router, Request, Response } from "express";

const router = Router();

const mockedToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3YjRlOGFiLWU5NmEtNDgwZS04NmJkLTVkM2UxYTNhNWEwNyIsImVtYWlsIjoiam90YXJvQG1haWwucnUiLCJmaXJzdE5hbWUiOiLQlNC20L7RgtCw0YDQviJ9.IlrTZbOtM4h4xe2aj4lwYMbFBPmm6KAzNQ1pk97o6gQ';

const mockedUserResponse = {
  id: '97b4e8ab-e96a-480e-86bd-5d3e1a3a5a07',
  email: 'jotaro@mail.ru',
  firstName: 'Джотаро',
}

const mockedLogoutResponse = {
  success: true,
  message: 'Выход успешно выполнен',
}

function setAuthCookie(res: Response, token: string): void {
  res.cookie('access_token', token, {
    httpOnly: true,                          // JS не может прочитать [citation:4][citation:11]
    secure: process.env.NODE_ENV === 'production', // только HTTPS в проде
    sameSite: 'lax',                         // защита от CSRF, работает на localhost [citation:4]
    maxAge: 7 * 24 * 60 * 60 * 1000,         // 7 дней
    path: '/',                               // доступен для всех API-запросов
  });
}

router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { email, password, firstName } = req.body;

  // Минимальная проверка - только на наличие полей
  if (!email || !password || !firstName) {
    res.status(400).json({ error: 'Все поля обязательны' });
    return;
  }

  setAuthCookie(res, mockedToken);
  res.status(201).json(mockedUserResponse);
})

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // Минимальная проверка
  if (!email || !password) {
    res.status(400).json({ error: 'Email и пароль обязательны' });
    return;
  }

  setAuthCookie(res, mockedToken);
  res.json(mockedUserResponse);
});

router.post('/logout', (req: Request, res: Response): void => {
   res.clearCookie('access_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  res.json(mockedLogoutResponse);
});

router.get('/me', (req: Request, res: Response): void => {
  const token = req.cookies['access_token'];

  if (!token) {
    res.status(401).json({
      success: false,
      error: 'Не авторизован',
      statusCode: 401,
    });
    return;
  }

  // TODO: здесь была бы валидация JWT и поиск пользователя по id
  res.json(mockedUserResponse);
});

export default router;