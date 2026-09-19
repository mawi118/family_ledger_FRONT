import axios, {
  AxiosError,
  type AxiosInstance,
} from "axios";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

export class ApiError extends Error {
  statusCode: number | undefined;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

export const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ error?: string; statusCode?: number }>) => {
    const status = error.response?.status;
    const serverMessage = error.response?.data?.error;

    // 401 — сессия истекла, куки больше нет или она невалидна.
    // Здесь позже: редирект на /login
    if (status === 401) {
      // window.location.href = "/login";
    }

    const message =
      serverMessage ??
      (error.code === "ECONNABORTED"
        ? "Превышено время ожидания"
        : "Что-то пошло не так. Попробуйте ещё раз.");

    return Promise.reject(new ApiError(message, status));
  },
);