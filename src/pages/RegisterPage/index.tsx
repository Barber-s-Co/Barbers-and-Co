import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";
import logo from "../../assets/logoName.svg";

export const RegisterPage = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/">Login</Link>
      </header>

      <main>
        <RegisterForm />
      </main>
    </>
  );
};
