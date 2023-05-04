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
          className="logoImg"
        />
      </header>
      <StyleLoginPage>
        <div className="login__form">
          <LoginForm />
        </div>
      </StyleLoginPage>
    </>
  );
};
