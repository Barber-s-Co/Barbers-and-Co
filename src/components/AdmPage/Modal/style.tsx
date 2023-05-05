import styled from "styled-components";

export const StyleModalAdd = styled.div`
  width: 90%;
  height: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid #f9cc00;

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    max-height: 450px;

    padding: 20px 0;

    background-color: #161616;
    color: white;

    position: relative;

    span {
      position: absolute;
      top: 10px;
      right: 20px;

      font-size: 20px;
      color: #ffffff;

      cursor: pointer;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      gap: 20px;

      width: 90%;
      height: 70%;

      color: white;

      button {
        width: 250px;
        height: 35px;

        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;

        border-radius: 5px;

        margin: 0 auto;

        font-size: 16px;

        :hover {
          background-color: #f9cc00;

          color: black;

          font-weight: 700;

          border: 1px solid black;
        }
      }
    }
  }

  @media (min-width: 900px) {
    width: 450px;
    height: 450px;
  }
`;

export const StyledModalEdit = styled.div`
  width: 90%;
  height: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid #f9cc00;

  .modal-services--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    max-height: 450px;

    padding: 20px 0;

    background-color: #161616;
    color: white;

    position: relative;

    span {
      position: absolute;
      top: 10px;
      right: 20px;

      font-size: 20px;
      color: #ffffff;

      cursor: pointer;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 20px;

      width: 90%;
      height: 60%;

      color: white;

      .btnEdit {
        width: 250px;
        height: 35px;

        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;

        border-radius: 5px;

        margin: 0 auto;

        font-size: 16px;

        :hover {
          background-color: #f9cc00;

          color: black;

          font-weight: 700;

          border: 1px solid black;
        }
      }
    }

    .btnDelete{
        position: absolute;
        bottom: 110px;

        width: 250px;
        height: 35px;

        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;

        border-radius: 5px;

        margin: 0 auto;

        font-size: 16px;

        :hover {
          background-color: #f9cc00;

          color: black;

          font-weight: 700;

          border: 1px solid black;
        }
    }
  }

  @media (min-width: 900px) {
    width: 450px;
    height: 450px;
  }
`;
