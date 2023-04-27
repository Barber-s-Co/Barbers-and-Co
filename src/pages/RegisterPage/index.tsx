import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Form/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <header>
        <img src="" alt="" />
        <Link to="/">Home</Link>
        <Link to="/">Login</Link>
      </header>

      <main>
        <RegisterForm />
      </main>
    </>
  );
};
