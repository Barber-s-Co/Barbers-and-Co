import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100%;
  width: 100%;

  height: 100%;

  padding: 15px 0;
  gap: 15px;

  .schedule {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.6);

    border: 1px solid #f9cc00;
    border-radius: 5px;

    height: 350px;
    width: 100%;

    padding: 10px 5px;

    h3 {
      font-size: 22px;

      color: #ffffff;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 90%;
      height: 100%;
      max-height: 100%;

      overflow-y: auto;

      padding: 8px 0;
      gap: 15px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid #ffffff;
        border-radius: 8px;

        width: 90%;

        padding: 5px 10px;

        color: #ffffff;

        img {
          width: 24px;
          height: 24px;
          cursor: pointer;

          background-color: #a4a2a2;
          border-radius: 5px;
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: rgba(0, 0, 0, 0.6);

    border: 1px solid #f9cc00;
    border-radius: 5px;

    padding: 0 10px;

    height: 350px;
    width: 100%;

    h3 {
      text-align: center;

      font-size: 22px;

      color: #ffffff;
    }

    label {
      display: flex;
      flex-direction: column;

      width: 100%;

      font-size: 12px;
      color: #ffffff;

      gap: 5px;

      select {
        width: 100%;
        height: 40px;

        background-color: rgba(0, 0, 0, 0.5);
        color: white;

        border: 1px solid white;
        border-radius: 5px;

        padding: 0 5px;

        margin: 0 auto;
      }
    }

    button {
      width: 90%;
      height: 40px;

      background-color: rgba(0, 0, 0, 0.5);
      color: #ffffff;

      border: 1px solid #ffffff;
      border-radius: 5px;

      margin: 0 auto;

      :hover {
        background-color: #f9cc00;

        color: black;

        font-weight: 700;

        border: 1px solid black;
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;

    .schedule {
      width: 37%;
      height: 70%;

      li {
        div {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
        }
      }
    }

    form {
      width: 37%;
      height: 70%;

      label {
        font-size: 16px;

        select {
          height: 50px;

          font-size: 16px;
        }
      }

      button {
        height: 50px;

        font-size: 18px;
      }
    }
  }
`;
