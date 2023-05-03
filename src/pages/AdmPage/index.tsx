import { Header } from "../../components/Header";
import logo from "../../assets/logo.svg";
import { AdmForm } from "../../components/AdmPage/AdmForm";
import { AdmComponent } from "../../components/AdmPage";

export const AdmPage = () => {
  return (
    <>
      <Header src={logo} rote="/" linkName="sair" alt="logo" className="logoImg" />

      <main>
        <AdmComponent />
      </main>
    </>
  );
};
