import styled from "styled-components";

export const StyleLoginPage = styled.main`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.9)
    ),
    url(src/assets/jovem-na-barbearia-aparando-cabelo.svg);
  background-position: -250px center;

  background-size: 290%;

  .login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    width: 95%;
  }
`;
