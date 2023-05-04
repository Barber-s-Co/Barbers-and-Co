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
        <div className="login__form">
          <LoginForm />
        </div>
      </StyleLoginPage>
    </>
  );
};
