import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/logoName.svg";
import Logo from "../../assets/logoB&C.svg";
import serviceLogo from "../../assets/servicesLogo.svg";
import iconB from "../../assets/iconB.svg";
import iconCB from "../../assets/iconCB.svg";
import iconCM from "../../assets/iconCM.svg";
import iconG from "../../assets/iconG.svg";
import iconM from "../../assets/iconM.svg";
import feedback1 from "../../assets/feedback1.svg";
import feedback2 from "../../assets/feedback2.svg";
import Whatsapp from "../../assets/zap.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Facebook from "../../assets/face.svg";
import Instagram from "../../assets/insta.svg";
import {
  StyleHeader,
  NavHeader,
  StyleMain,
  CentralLogo,
  AboutUs,
  StyleServices,
  ServicesContainer,
  SchedulingHome,
  StyleFeedback,
  StyleFooter,
} from "./style";

export const Homepage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollPosition(0);
  };

  return (
    <StyleMain>
      <StyleHeader>
        <img src={logo} alt="logo" />
        <NavHeader>
          <Link to="/login" className="loginBtn">
            Login
          </Link>
          <Link to="/register" className="registerBtn">
            Cadastrar
          </Link>
        </NavHeader>
      </StyleHeader>
      <CentralLogo>
        <img src={Logo} alt="logo" />
      </CentralLogo>
      <AboutUs>
        <p>
          Nossa empresa nasceu através de uma necessidade de agilizar o processo
          de cuidados pessoais que um homem tem.
        </p>
        <h2>SOBRE NÓS</h2>
      </AboutUs>
      <StyleServices>
        <img className="servicesLogo" src={serviceLogo} alt="ServiceLogo" />
        <ServicesContainer>
          <ul>
            <li>
              <img src={iconCB} alt="iconCB" />
              <p>Cabelo e barba</p>
            </li>
            <li>
              <img src={iconM} alt="iconM" />
              <p>Massagem</p>
            </li>
            <li>
              <img src={iconCM} alt="iconCM" />
              <p>Cuidados Masculinos</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src={iconB} alt="iconB" />
              <p>Bar</p>
            </li>
            <li>
              <img src={iconG} alt="iconG" />
              <p>Games</p>
            </li>
          </ul>
        </ServicesContainer>
      </StyleServices>
      <SchedulingHome>
        <Link to="/login" className="BtnScheduling">
          AGENDE SEU HORÁRIO!
        </Link>
      </SchedulingHome>
      <StyleFeedback>
        <h2>Feedback de alguns clientes:</h2>
        <div className="feedbacks">
          <img className="feedback1" src={feedback1} alt="feedback1" />
          <img className="feedback2" src={feedback2} alt="feedback2" />
        </div>
      </StyleFeedback>
      <StyleFooter>
        <div className="contacts">
          <h3>Contatos</h3>
          <p>
            <img src={LinkedIn} alt="LinkedIn" />{" "}
            <a href="https://linkedin.com/" target="_blank">
              LinkedIn
            </a>
          </p>
          <p>
            <img src={Instagram} alt="Instagram" />{" "}
            <a href="https://instagram.com/" target="_blank">
              Instagram
            </a>
          </p>
          <p>
            <img src={Facebook} alt="Facebook" />{" "}
            <a href="https://facebook.com/" target="_blank">
              Facebook
            </a>
          </p>
          <p>
            <img src={Whatsapp} alt="Whatsapp" />{" "}
            <a href="https://web.whatsapp.com/" target="_blank">
              Whatsapp
            </a>
          </p>
        </div>
        <div>
          <h3>Onde nos encontrar:</h3>
          <p>Rua sem número e casa sem teto</p>
        </div>
        <button onClick={handleScrollToTop}>Voltar ao topo</button>
      </StyleFooter>
    </StyleMain>
  );
};
