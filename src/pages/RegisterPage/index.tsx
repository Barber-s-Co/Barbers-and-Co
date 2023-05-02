import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";
import logo from "../../assets/logoName.svg";
import { StyledRegisterPage } from "./styled";
import { StyledHeader } from "../../components/Header/style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <div className="header_register">
          <Link to="/homePage">Home</Link>
          <Link to="/">Login</Link>
        </div>
      </StyledHeader>

      <main>
        <RegisterForm />
      </main>
    </StyledRegisterPage>
  );
};
