import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer } from "react-toastify";
import { StyledLoginForm } from "./style";
import { Link } from "react-router-dom";

export interface TLoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <Input
          disabled={loading}
          type="email"
          id="login"
          label="Email"
          placeholder="Email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          disabled={loading}
          type="password"
          id="password"
          label="Senha"
          placeholder="Senha"
          {...register("password")}
          error={errors.password}
        />
        <button disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>

        <small className="register__paragraph">
          Crie sua conta e aproveite o melhor serviço da cidade!
        </small>
        <Link to="/register" className="register__btn">
          Cadastrar
        </Link>
      </StyledLoginForm>
    </>
  );
};
