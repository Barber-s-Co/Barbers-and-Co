import { useContext } from "react";
import { StyledContainer } from "../../Schedule/style";
import { ServicesContext } from "../../../context/ServicesContext";
import { StyledServicesContainer, ModalBackdrop } from "./styled";
import { Input } from "../../Form/Input";

interface IModal {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const AdmForm = ({ openModal, closeModal, isModalOpen }: IModal) => {
  const { appointments } = useContext(ServicesContext);
  return (
    <>
      {isModalOpen ? (
        <ModalBackdrop>
        <div className="modal">
          <div className="modal-content">
            <span onClick={() => closeModal()}>X</span>
            <h2>Criar serviço</h2>
            <label>
              Criar serviço
              <Input type="text" placeholder="" id="service" />
            </label>
            <label>
              Valor do serviço
              <Input type="text" placeholder="" id="price" />
            </label>
            <button>criar serviço</button>
          </div>
        </div>
        </ModalBackdrop>
      ) : <StyledContainer>
      <div className="schedule">
        <h2>Clientes agendados</h2>

        <ul>
          {appointments
            ? appointments.map((appointment) => {
                return (
                  <li key={appointment.id}>
                    <div>
                      <p>{appointment.name}</p>
                      <span>{`${appointment.date} ás ${appointment.hour}`}</span>
                    </div>
                    <button>excluir</button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <StyledServicesContainer>
        <div className="service-content">
          <h2>Gerenciamento de Serviços</h2>

          <button onClick={() => openModal()}>Adicionar serviço</button>

          <ul>
            <h2>Tipos de serviços</h2>
          </ul>
        </div>
      </StyledServicesContainer>
    </StyledContainer>}
      
    </>
  );
};
