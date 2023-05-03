import styled from "styled-components";

export const StyledServicesContainer = styled.div`
  .service-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.6);

    border: 1px solid yellow;
    border-radius: 5px;

    padding: 25px 10px;
    gap: 40px;

    color: #ffffff;

    h2 {
      font-size: 20px;
    }

    button {
      width: 150px;
      height: 50px;

      padding: 5px 5px;

      background-color: #404040;
      color: #ffffff;

      border-radius: 5px;
    }

    ul {
      text-align: center;

      background-color: #404040;

      width: 80%;
      height: 150px;

      border-radius: 5px;

      padding: 10px 10px;
    }

    
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;

    div {
      width: 450px;
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

      background-color:#282828;

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

`