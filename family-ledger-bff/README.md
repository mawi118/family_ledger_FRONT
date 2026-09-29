                                                                                                                # family-ledger-bff

BFF между фронтом и gRPC-бэкендом (`family_ledger_BACK`). Проксирует auth через REST: `/api/auth/{register,login,refresh,logout,me}`. Токены — в HttpOnly-куках (`access_token`, `refresh_token`).

## Запуск

```bash
npm install
npm run dev      # с автоперезагрузкой (nodemon)
```

Переменные окружения (`.env`, все опциональны — есть дефолты в `src/config/constants.ts`):

| Переменная | По умолчанию |
|---|---|
| `PORT` | `4000` |
| `NODE_ENV` | `development` |
| `CORE_GRPC_ADDR` | `localhost:5050` (для прода задаётся в docker-compose как `backend:5050` через общую сеть) |
| `CORE_API_URL` | `http://localhost:5000/api` |

## Прод-сборка

```bash
npm run build && npm start
```
Или через Docker — `Dockerfile` собирает `dist/` и копирует `proto/` (proto-файл нужен в рантайме, `@grpc/proto-loader` компилирует его на старте, а не при сборке).

## Обновление gRPC-контракта

При изменении `proto/auth.proto` (после изменений на бэкенде) — перегенерировать типы:

```bash
npx proto-loader-gen-types --keepCase --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js -O src/generated proto/auth.proto
```

## Тесты

Полный auth-флоу (register → me → refresh → me → logout → refresh-должен-провалиться) — Bruno-коллекция в `api-tests/` (окружения `local`/`prod`).

## CI/CD

Push в `master` (пути `family-ledger-bff/**`) → собирает образ, пушит в `ghcr.io/mawi118/family_ledger_bff`, деплоит на VPS по SSH. См. `.github/workflows/bff-build.yml`.