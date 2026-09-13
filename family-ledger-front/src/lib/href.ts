import { paths } from "@/routes";

type PathKey = keyof typeof paths;

export function href(key: PathKey): string {
  return `/${paths[key]}`;
}