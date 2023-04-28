import { useState } from "react";
import { useForm } from "react-hook-form";
import { TRegisterFormValues, ZodRegister } from "../../Zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(ZodRegister),
  });

  const submit = () => {};

  return (
    <form>
      <Input
        disabled={loading}
        type="text"
        id="name"
        label="Email"
        placeholder="Email"
        {...register("email")}
        error={errors.name}
      />
      <Input
        disabled={loading}
        type="email"
        id="email"
        placeholder="Digite seu email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        disabled={loading}
        type="password"
        id="password"
        placeholder="Digite sua senha"
        {...register("password")}
        error={errors.password}
      />
      <Input
        disabled={loading}
        type="password"
        id="confirmPassword"
        placeholder="Confirme sua senha"
        {...register("confirm")}
        error={errors.confirm}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};
