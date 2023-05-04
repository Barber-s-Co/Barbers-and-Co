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
      <h1>Cadastro</h1>
      <div className="div_form_register">
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
          label="Email"
          placeholder="Digite seu email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          disabled={loading}
          type="password"
          id="password"
          label="Senha"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password}
        />
        <Input
          disabled={loading}
          type="password"
          id="confirmPassword"
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          {...register("confirm")}
          error={errors.confirm}
        />
        <div className="div_btn_register">
          <button disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </div>
      </div>
    </form>
  );
};
