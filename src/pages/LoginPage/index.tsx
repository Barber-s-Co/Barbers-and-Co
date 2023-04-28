import { LoginForm } from "../../components/Form/LoginForm";

export const LoginPage = () => {
  return (
    <main>
      <div>
        <div className="login__form">
          <h2>Login</h2>
          <LoginForm />
          <p className="register__paragraph">
            Crie sua conta e aproveite o melhor serviço da cidade!
          </p>
          <button className="register__btn">Cadastrar</button>
        </div>
      </div>
    </main>
  );
};
