import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";
import { Header } from "../../components/Header";
import Logo from "../../assets/logoB&C.svg";
import { StyleLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <>
      <header>
        <Header
          rote="/register"
          linkName="Registrar"
          src={Logo}
          alt="Logo Barber's & Co"
          className="logoLoginRegister"
        />
      </header>
      <StyleLoginPage>
        <div>
          <div className="login__form">
            <h2>Login</h2>
            <LoginForm />
            <p className="register__paragraph">
              Crie sua conta e aproveite o melhor serviço da cidade!
            </p>
            <Link to="/register" className="register__btn">
              Cadastrar
            </Link>
          </div>
        </div>
      </StyleLoginPage>
    </>
  );
};
