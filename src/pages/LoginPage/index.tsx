import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/LoginForm";
import logo from "../../assets/logoName.svg";
import { StyleLoginPage } from "./style";
import { NavHeader, StyleHeader } from "../HomePage/style";

export const LoginPage = () => {
  return (
    <>
      <StyleHeader>
        <img src={logo} alt="logo" />
        <NavHeader>
          <Link to="/" className="loginBtn">
            Home
          </Link>
          <Link to="/register" className="registerBtn">
            Cadastrar
          </Link>
        </NavHeader>
      </StyleHeader>
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
