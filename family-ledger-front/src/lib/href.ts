import { paths } from "@/routes";

type PathKey = keyof typeof paths;

export function href(key: PathKey): string {
  const path = paths[key];
  // Корень уже начинается со слэша — не дублируем
  return path.startsWith("/") ? path : `/${path}`;
}