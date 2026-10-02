import * as grpc from '@grpc/grpc-js';

interface HttpError {
  statusCode: number;
  error: string;
}

// Текст ошибки, который бэкенд сформировал сам (по требованиям). Пустой details игнорируем.
function backendMessage(err: unknown): string | undefined {
  const details = (err as grpc.ServiceError)?.details;
  return typeof details === 'string' && details.trim() !== '' ? details : undefined;
}

export function grpcErrorToHttp(err: unknown): HttpError {
  const code = (err as grpc.ServiceError)?.code;

  switch (code) {
    case grpc.status.ALREADY_EXISTS:
      return { statusCode: 409, error: backendMessage(err) ?? 'Почта уже занята' };

    case grpc.status.UNAUTHENTICATED:
      // Для логина бэкенд отдаёт «Неверное имя пользователя или пароль»,
      // для остальных методов — «Не авторизован».
      return { statusCode: 401, error: backendMessage(err) ?? 'Не авторизован' };

    case grpc.status.INVALID_ARGUMENT:
      return { statusCode: 400, error: backendMessage(err) ?? 'Некорректные данные' };

    case grpc.status.NOT_FOUND:
      return { statusCode: 404, error: 'Не найдено' };

    case grpc.status.UNAVAILABLE:
    case grpc.status.DEADLINE_EXCEEDED:
      console.error('[gRPC unavailable]', err);
      return { statusCode: 503, error: 'Сервис временно недоступен. Попробуйте позже.' };

    default:
      console.error('[gRPC error]', err);
      return { statusCode: 500, error: 'Внутренняя ошибка сервера' };
  }
}