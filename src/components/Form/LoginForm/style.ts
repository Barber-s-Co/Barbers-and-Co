import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: red;

  div {
    width: 100%;
  }

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    margin-top: 0.5rem;
  }
  input::placeholder {
    color: grey;
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
