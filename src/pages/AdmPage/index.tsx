import { Header } from "../../components/Header";
import logo from "../../assets/logo.svg";
import { AdmForm } from "../../components/AdmPage/AdmForm";
import { AdmComponent } from "../../components/AdmPage";
import { StyledMain } from "./style";

export const AdmPage = () => {
  return (
    <>
      <Header src={logo} rote="/" linkName="Sair" alt="logo" className="logoImg" />
      <StyledMain>
        <div className="container">
          <AdmComponent />
        </div>
      </StyledMain>
    </>
  );
};
