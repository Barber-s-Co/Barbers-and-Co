import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  height: 70px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);

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
    border-bottom: 3px solid #f9cc00;

    font-size: 18px;
    font-weight: 600;

    background-color: transparent;
  }

  @media (min-width: 769px) {
    padding: 0 100px;
    
    height: 80px;

    display: flex;

    .logoImg {
      margin-left: 15px;
    }
  }
`;
