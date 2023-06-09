import styled from "styled-components";
import backgroundImg from "../../assets/jovem-na-barbearia-aparando-cabelo.svg";

export const StyleLoginPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImg});
  background-position: -250px center;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95%;
    color: #ffffff;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 88%;
    padding: 1rem 2rem;
    background-color: white;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;

    p {
      font-size: 0.75rem;
      margin-top: 5px;
      color: #d83737;
    }

    @media (min-width: 405px) {
      width: 400px;
    }
  }
`;
