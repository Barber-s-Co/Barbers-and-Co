import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TRegisterFormValues, ZodRegister } from "../../Zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { UserContext } from "../../../context/UserContext";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(ZodRegister),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        disabled={loading}
        type="text"
        id="name"
        label="Nome"
        placeholder="Digite seu nome"
        {...register("name")}
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
      <button disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
};
