import * as grpc from '@grpc/grpc-js';

/**
 * Превращает gRPC-вызов в Promise для удобной работы с async/await.
 *
 * Типы:
 *   TReq — тип запроса (например, FL.v1.RegisterRequest)
 *   TRes — тип ответа __Output (например, FL.v1.RegisterResponse__Output)
 */
export function promisifyGrpc<TReq, TRes>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client: any,
  method: string,
  request: TReq
): Promise<TRes> {
  return new Promise((resolve, reject) => {
    client[method](
      request,
      (err: grpc.ServiceError | null, response: TRes) => {
        if (err) return reject(err);
        resolve(response);
      }
    );
  });
}