import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { href } from "@/lib/href";

type CharClass = "letter" | "digit" | "symbol" | "other";

function classify(ch: string): CharClass {
  if (/[A-Za-z]/.test(ch)) return "letter";
  if (/\d/.test(ch)) return "digit";
  if (/[^A-Za-z0-9]/.test(ch)) return "symbol";
  return "other";
}

/**
 * true, если в строке есть `runLength` символов подряд
 * из одной категории (letter / digit / symbol).
 */
function hasRunOf(value: string, runLength: number): boolean {
  let current = 0;
  let prev: CharClass | null = null;

  for (const ch of value) {
    const cls = classify(ch);

    if (cls === prev && cls !== "other") {
      current += 1;
      if (current >= runLength) return true;
    } else {
      current = 1;
      prev = cls;
    }
  }

  return false;
}

const schema = z
  .object({
    username: z
      .string()
      .regex(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Имя должно содержать только буквы, пробел и дефис")
      .min(2, "Имя должно быть длиной от 2 символов")
      .max(99, "Имя слишком длинное"),
    email: z.string().email("Некорректный email"),
    password: z
      .string()
      .min(8, "Пароль должен быть длинной от 8 до 26 символов включительно")
      .max(26, "Пароль должен быть длинной от 8 до 26 символов включительно")
      .refine(
        (value) => !hasRunOf(value, 4),
        "Пароль не должен содержать подряд идущие буквы или цифры, например 'qwerty'"
      )
      .regex(/[A-Za-z]/, "Пароль должен иметь хоть одну букву")
      .regex(/\d/, "Пароль должен иметь хоть одну цифру")
      .regex(
        /[,. '"*?!@#$%^&()\-+=~]/,
        `Пароль должен иметь хоть один специальный символ: , . ' " ? ! @ # $ % ^ & * ( ) - + = ~`
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function RegisterPage() {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: 'onChange',
  });

  async function onSubmit(values: FormValues) {
    try {
      // TODO: await api.register(values);
      console.log("register", values);

      navigate(href('verifyEmail'), { state: { email: values.email } });
    } catch {
      form.setError("root", {
        message: "Не удалось зарегистрироваться. Попробуйте ещё раз.",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Регистрация</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <Controller
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Имя пользователя</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Иван"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <FieldDescription>
                  Ваше отображаемое имя в системе
                </FieldDescription>
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Адрес эл. почты</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="email@example.ru"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Пароль</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  autoComplete="new-password"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <FieldDescription>
                  Пароль должен содержать от 8 до 26 символов включительно, иметь хоть одну цифру, букву и специальный символ
                </FieldDescription>
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Повторите пароль</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  autoComplete="new-password"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {form.formState.errors.root && (
            <p className="text-sm text-destructive" role="alert">
              {form.formState.errors.root.message}
            </p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? "Регистрируем…"
              : "Зарегистрироваться"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Уже есть аккаунт?{" "}
          <Link to={href('login')} className="text-primary underline">
            Войти
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}