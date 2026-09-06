import { Router, Request, Response } from "express";

const router = Router();

const mockedUserResponse = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3YjRlOGFiLWU5NmEtNDgwZS04NmJkLTVkM2UxYTNhNWEwNyIsImVtYWlsIjoiam90YXJvQG1haWwucnUiLCJmaXJzdE5hbWUiOiLQlNC20L7RgtCw0YDQviJ9.IlrTZbOtM4h4xe2aj4lwYMbFBPmm6KAzNQ1pk97o6gQ',
    user: {
        id: '97b4e8ab-e96a-480e-86bd-5d3e1a3a5a07',
        email: 'jotaro@mail.ru',
        firstName: 'Джотаро',
    }
}

const mockedLogoutResponse = {
    success: true,
    message: 'Выход успешно выполнен',
}

router.post('/register', async (req: Request, res: Response): Promise<void> => {
    const { email, password, firstName } = req.body;

  // Минимальная проверка - только на наличие полей
  if (!email || !password || !firstName) {
    res.status(400).json({ error: 'Все поля обязательны' });
    return;
  }

  res.status(201).json(mockedUserResponse);
})

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // Минимальная проверка
  if (!email || !password) {
    res.status(400).json({ error: 'Email и пароль обязательны' });
    return;
  }

  res.json(mockedUserResponse);
});

router.post('/logout', (req: Request, res: Response): void => {
  // Просто возвращаем успех - клиент сам удалит токен
  res.json(mockedLogoutResponse);
});

export default router;