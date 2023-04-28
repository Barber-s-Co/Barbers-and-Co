import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color:#282828;

  padding: 25px 15px;
  gap: 25px;

  .schedule {
    background-color: rgba(0, 0, 0, 0.6);
    height: 250px;
    border: 1px solid yellow;

    border-radius: 10px;

    text-align: center;

    padding: 15px 5px;

    color: white;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 20px;

      padding: 10px 0;
      li {
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 70%;
        border: 1px solid;
        border-radius: 25px;

        padding: 5px 5px;

        p {
          font-size: 12px;
        }

        div {
          display: flex;
          flex-direction: column;

          p {
            font-size: 12px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
   
   flex-direction: row;
    padding: 30px 150px;

    justify-content: space-between;

    .schedule {
      width: 350px;
      height: 550px;
    }
  }
`;

export const StyledFormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    background-color: rgba(0, 0, 0, 0.6);

    border: 1px solid yellow;
    border-radius: 5px;

    padding: 25px 10px;
    gap: 40px;

    label {
      display: flex;
      flex-direction: column;

      color: white;

      gap: 15px;
    }
    .total {
      display: flex;
      justify-content: space-between;

      padding: 0 20px;
      color: white;

      border-bottom: 1px solid;
    }

    button {
      height: 30px;

      border-radius: 5px;
      border: 1px solid white;

      background-color: transparent;
      color: white;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;

    form {
      width: 450px;
    }
  }
`;
