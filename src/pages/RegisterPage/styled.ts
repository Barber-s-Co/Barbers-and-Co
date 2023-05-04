import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      url("https://img.freepik.com/fotos-gratis/homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba_1303-20953.jpg?w=2000");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    width: 88%;
    padding: 1rem;

    background-color: white;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;

    @media (min-width: 405px) {
      width: 400px;
    }
  }
  input {
    height: 40px;
    width: 100%;
    margin-top: 0.5rem;
    color: white;
  }
  input::placeholder {
    color: grey;
  }

  label {
    font-size: 1rem;
  }

  button {
    height: 40px;
    width: 100%;
    opacity: 80%;

    color: white;
    background-color: #f9cc00;
    cursor: pointer;
    border-radius: 5px;
  }
`;
