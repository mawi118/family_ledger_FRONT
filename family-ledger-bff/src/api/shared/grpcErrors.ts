import * as grpc from '@grpc/grpc-js';

interface HttpError {
  statusCode: number;
  error: string;
}

export function grpcErrorToHttp(err: unknown): HttpError {
  const code = (err as grpc.ServiceError)?.code;

  switch (code) {
    case grpc.status.ALREADY_EXISTS:
      return {
        statusCode: 409,
        error: 'Пользователь с такой почтой уже существует',
      };

    case grpc.status.UNAUTHENTICATED:
      return {
        statusCode: 401,
        error: 'Неверный email или пароль',
      };

    case grpc.status.INVALID_ARGUMENT:
      return {
        statusCode: 400,
        error: (err as grpc.ServiceError).details || 'Некорректные данные',
      };

    case grpc.status.NOT_FOUND:
      return {
        statusCode: 404,
        error: 'Не найдено',
      };

    default:
      console.error('[gRPC error]', err);
      return {
        statusCode: 500,
        error: 'Внутренняя ошибка сервера',
      };
  }
}