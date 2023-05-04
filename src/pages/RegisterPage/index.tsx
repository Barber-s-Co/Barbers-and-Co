import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";
import logo from "../../assets/logoName.svg";
import { StyledRegisterPage } from "./styled";
import { NavHeader, StyleHeader } from "../HomePage/style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <StyleHeader>
        <img src={logo} alt="logo" />
        <NavHeader>
          <Link to="/" className="loginBtn">
            Home
          </Link>
          <Link to="/login" className="registerBtn">
            Login
          </Link>
        </NavHeader>
      </StyleHeader>

      <main>
        <RegisterForm />
      </main>
    </StyledRegisterPage>
  );
};
