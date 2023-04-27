import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = () => {};

  return (
    <form>
      <Input
        type="text"
        id="name"
        placeholder="Digite seu nome"
        {...register("name")}
      />
      <Input
        type="email"
        id="email"
        placeholder="Digite seu email"
        {...register("email")}
      />
      <Input
        type="password"
        id="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      <Input
        type="password"
        id="confirmPassword"
        placeholder="Confirme sua senha"
        {...register("confirm")}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};
