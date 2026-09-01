import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { CONFIG } from './config/constants';

// Импорты роутов
// import authRoutes from './routes/auth';
// import postRoutes from './routes/posts';
// import userRoutes from './routes/users';

dotenv.config();

const app: Express = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

app.use(cookieParser());

// Искусственная задержка (для эмуляции реального API)
if (CONFIG.NODE_ENV === 'development') {
  app.use((req: Request, res: Response, next) => {
    const delay = Math.random() * 600 + 200;
    setTimeout(next, delay);
  });
}

// ----------- Роуты -----------
// app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/users', userRoutes);

// ----------- Запуск сервера -----------
app.listen(CONFIG.PORT, () => {
  console.log(`🚀 BFF сервер запущен на http://localhost:${CONFIG.PORT}`);
  console.log(`🔧 Режим: ${CONFIG.NODE_ENV}`);
  console.log(`📦 Используются моки: ${CONFIG.NODE_ENV === 'development'}`);
});