import {
  type RouteConfig,
  route,
  layout,
} from "@react-router/dev/routes";

export const paths = {
  home: "/",
  login: "login",
  register: "register",
  verifyEmail: "verify-email",
} as const;

export default [
  route(paths.home, "pages/HomePage.tsx"),
  layout("components/auth/AuthLayout.tsx", [
    route(paths.login, "pages/auth/LoginPage.tsx"),
    route(paths.register, "pages/auth/RegisterPage.tsx"),
    route(paths.verifyEmail, "pages/auth/VerifyEmailPage.tsx"),
  ]),
] satisfies RouteConfig;