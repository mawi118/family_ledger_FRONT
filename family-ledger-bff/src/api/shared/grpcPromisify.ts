import * as grpc from '@grpc/grpc-js';

// Максимальное время ожидания ответа бэкенда. Без дедлайна зависший бэкенд подвесил бы запрос навсегда.
const GRPC_TIMEOUT_MS = 10_000;

/**
 * Превращает gRPC-вызов в Promise для удобной работы с async/await.
 *
 * Типы:
 *   TReq — тип запроса (например, FL.v1.RegisterRequest)
 *   TRes — тип ответа __Output (например, FL.v1.RegisterResponse__Output)
 *
 * metadata — необязательные gRPC-метаданные (например, authorization: Bearer <access>).
 */
export function promisifyGrpc<TReq, TRes>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client: any,
    method: string,
    request: TReq,
    metadata: grpc.Metadata = new grpc.Metadata()
): Promise<TRes> {
    return new Promise((resolve, reject) => {
        client[method](
            request,
            metadata,
            { deadline: Date.now() + GRPC_TIMEOUT_MS },
            (err: grpc.ServiceError | null, response: TRes) => {
                if (err) return reject(err);
                resolve(response);
            }
        );
    });
}