import { Header } from "../../components/Header";
import { Schedule } from "../../components/Schedule";
import logo from "../../assets/logo.svg";
import { StyledMain } from "./styles";

export const UserPage = () => {
  return (
    <>
      <Header src={logo} alt="logo" rote="/" linkName="Sair" className="logoImg" />
      <StyledMain>
        <div className="container">
          <Schedule />
        </div>
      </StyledMain>
    </>
  );
};
