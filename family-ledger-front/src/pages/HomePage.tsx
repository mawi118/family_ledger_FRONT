import type { Route } from "./+types/HomePage";
import { redirect } from "react-router";
import { getCurrentUser } from "@/api/auth/auth-endpoints";
import { ApiError } from "@/api/http";

export async function clientLoader () {
  try {
    const user = await getCurrentUser();
    return { user };
  } catch (error) {
    // 401 — пользователь не авторизован
    if (error instanceof ApiError && error.statusCode === 401) {
      throw redirect("/login");
    }
    // Любая другая ошибка (сеть, 500) — пробрасываем в ErrorBoundary
    throw error;
  }
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-4 text-center">
        <h1 className="text-3xl font-semibold">
          Привет, {user.firstName}!
        </h1>
        <p className="text-muted-foreground">
          Это защищённая страница. Её видят только авторизованные пользователи.
        </p>
        <p className="text-sm text-muted-foreground">
          {user.email}
        </p>
      </div>
    </div>
  );
}