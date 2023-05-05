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
    font-size: 1rem;
    font-weight: 700;
    color: black;
    background-color: #f9da00;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #ccb203;
  }

  .register__btn {
    background-color: #a3a3a394;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: white;
  }

  .register__btn:hover {
    background-color: #a3a3a350;
  }
`;
