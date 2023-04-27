import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";

export interface ILoginFormData {
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
  } = useForm<ILoginFormData>();

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          disabled={loading}
          type="email"
          id="login"
          label="Email"
          placeholder="Email"
          {...register("email")}
        />
        <Input
          disabled={loading}
          type="password"
          id="password"
          label="Senha"
          placeholder="Senha"
          {...register("password")}
        />
        <button disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
      </form>
    </>
  );
};
