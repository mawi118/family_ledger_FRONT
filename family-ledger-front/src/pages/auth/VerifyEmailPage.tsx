import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useLocation, useNavigate } from "react-router";
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

const schema = z.object({
  code: z
    .string()
    .length(6, "Код состоит из 6 цифр")
    .regex(/^\d+$/, "Только цифры"),
});

type FormValues = z.infer<typeof schema>;

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state?: { email?: string } };
  const email = state?.email;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { code: "" },
  });

  async function onSubmit({ code }: FormValues) {
    try {
      // TODO: await api.verify({ email, code });
      console.log("verify", { email, code });

      // TODO: сохранить токен/юзера, если бэкенд их возвращает
      navigate("/");
    } catch {
      form.setError("root", {
        message: "Неверный или просроченный код",
      });
    }
  }

  async function handleResend() {
    // TODO: await api.resendCode({ email });
    console.log("resend code to", email);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Подтверждение почты
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-center text-sm text-muted-foreground">
          Мы отправили код на{" "}
          <span className="font-medium text-foreground">
            {email ?? "вашу почту"}
          </span>
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <Controller
            control={form.control}
            name="code"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Код из письма</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  placeholder="000000"
                  aria-invalid={fieldState.invalid}
                  className="text-center text-lg tracking-[0.5em]"
                  onChange={(e) => {
                    // оставляем только цифры и режем до 6 символов
                    const digits = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 6);
                    field.onChange(digits);
                  }}
                />
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>
                    Код действует 10 минут
                  </FieldDescription>
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
            {form.formState.isSubmitting ? "Проверяем…" : "Подтвердить"}
          </Button>
        </form>

        <button
          type="button"
          onClick={handleResend}
          className="mt-4 w-full text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          Отправить код повторно
        </button>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          Неверный email?{" "}
          <Link to={href('register')} className="underline hover:text-foreground">
            Зарегистрироваться заново
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}