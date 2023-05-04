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

  .service-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.6);

    border: 1px solid #f9cc00;
    border-radius: 5px;

    height: 350px;
    width: 100%;

    color: white;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 50px;
      width: 50%;

      background-color: #404040;
      color: white;

      padding: 5px 10px;

      border-radius: 5px;

      font-size: 18px;
     
    }

    ul{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 10px 5px;
      gap: 10px;
      
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid #ffffff;
        border-radius: 8px;

        width: 90%;

        padding: 5px 10px;

        color: #ffffff;
      };
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

    .service-content{
      width: 37%;
      height: 70%;
    }
  }
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    position: absolute;
    top: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 50%;
    width: 90%;

    background-color: #282828;

    border-radius: 8px;
    border: 1px solid #404040;

    color: white;

    .modal-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
