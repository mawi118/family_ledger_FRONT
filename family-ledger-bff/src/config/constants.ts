import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  PORT: +(process.env.PORT || '4000'),
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORE_API_URL: process.env.CORE_API_URL || 'http://localhost:5000/api',
  TOKEN_EXPIRY: 7 * 24 * 60 * 60 * 1000, // 7 дней
  JWT_COOKIE_NAME: 'jwt',
} as const;

export type Config = typeof CONFIG;