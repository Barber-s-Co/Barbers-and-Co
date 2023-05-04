import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;

  height: 70px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 90%;

    max-height: 100%;

    .logoImg {
      width: 65px;
      height: 65px;
      margin-left: 10px;
    }

    .logoWriting {
      width: 200px;
      height: 65px;
    }

    a {
      color: white;

      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }
    a:hover {
      border-bottom: 3px solid #f9cc00;
    }

    button {
      color: white;

      font-size: 18px;
      font-weight: 600;

      background-color: transparent;

      max-height: 1.6875rem;

      :hover {
        border-bottom: 3px solid #f9cc00;
      }
    }
  }
`;
