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

      margin-left: 15px;

      font-size: 12px;
      color: #ffffff;

      select {
        width: 90%;
        height: 30px;

        background-color: rgba(0, 0, 0, 0.5);
        color: white;

        border: 1px solid white;
        border-radius: 5px;

        padding: 0 5px;
      }
    }

    button {
      width: 90%;
      height: 30px;

      background-color: rgba(0, 0, 0, 0.5);
      color: #ffffff;

      border: 1px solid #ffffff;
      border-radius: 5px;

      margin-left: 15px;
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
    }
  }
`;
