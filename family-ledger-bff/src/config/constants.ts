import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  PORT: +(process.env.PORT || '4000'),
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORE_API_URL: process.env.CORE_API_URL || 'http://localhost:5000/api',
  CORE_GRPC_ADDR: process.env.CORE_GRPC_ADDR || '176.108.245.73:5050',
  TOKEN_EXPIRY: 7 * 24 * 60 * 60 * 1000, // 7 дней
  JWT_COOKIE_NAME: 'access_token',
} as const;

export type Config = typeof CONFIG;