import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { CONFIG } from './config/constants';

// Импорты роутов
import authRoutes from './api/auth/auth';

dotenv.config();

const app: Express = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // передаем управление дальше
});

app.use(cookieParser());

// Искусственная задержка (для эмуляции реального API)
if (CONFIG.NODE_ENV === 'development') {
  app.use((req: Request, res: Response, next) => {
    const delay = Math.random() * 600 + 200;
    setTimeout(next, delay);
  });
}

// ----------- Роуты -----------
app.use('/api/auth', authRoutes);

// ----------- Запуск сервера -----------
app.listen(CONFIG.PORT, () => {
  console.log(`🚀 BFF сервер запущен на http://localhost:${CONFIG.PORT}`);
  console.log(`🔧 Режим: ${CONFIG.NODE_ENV}`);
  console.log(`📦 Используются моки: ${CONFIG.NODE_ENV === 'development'}`);
});