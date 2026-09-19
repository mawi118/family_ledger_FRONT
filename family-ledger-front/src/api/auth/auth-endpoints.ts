import { http } from "@/api/http";
import type { components } from "@/api/auth/auth-types";

export type User = components["schemas"]["UserResponse"];
export type AuthResponse = components["schemas"]["UserResponse"];
export type RegisterRequest = components["schemas"]["RegisterUserRequest"];
export type LoginRequest = components["schemas"]["AuthUserRequest"];
export type LogoutResponse = components["schemas"]["LogoutUserResponse"];

export async function register(data: RegisterRequest): Promise<AuthResponse> {
  const { data: response } = await http.post<AuthResponse>(
    "/auth/register",
    data,
  );
  return response;
}

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const { data: response } = await http.post<AuthResponse>(
    "/auth/login",
    data,
  );
  return response;
}

export async function logout(): Promise<LogoutResponse> {
  const { data: response } = await http.post<LogoutResponse>("/auth/logout");
  return response;
}

export async function getCurrentUser(): Promise<User> {
  const { data: response } = await http.get<User>("/auth/me");
  return response;
}