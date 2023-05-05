import { useContext } from "react";
import { ServicesContext } from "../../../context/ServicesContext";
import { ModalBackdrop, StyledContainer } from "./styled";
import { Input } from "../../Form/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AdmContext, IServiceAdm } from "../../../context/AdmContext";
import { ToastContainer } from "react-toastify";
import { ModalAddServices, ModalEditService } from "../Modal";

interface IModal {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  openModalServices: () => void;
  closeModalServices: () => void;
  modalServices: boolean;
}

export const AdmForm = () => {
  const {
    addServices,
    editServices,
    setIdService,
    deleteServices,
    openModal,
    closeModal,
    openModalServices,
    closeModalServices,
    modalServices,
    isModalOpen,
  } = useContext(AdmContext);
  const { appointments, services } = useContext(ServicesContext);

  return (
    <>
      <ToastContainer />

      {isModalOpen && (
        <ModalBackdrop>
          <ModalAddServices closeModal={closeModal} addServices={addServices} />
        </ModalBackdrop>
      )}

      {modalServices && (
        <ModalBackdrop>
          <ModalEditService
            modalServices={modalServices}
            closeModalServices={closeModalServices}
            editServices={editServices}
            deleteServices={deleteServices}
          />
        </ModalBackdrop>
      )}

      <StyledContainer>
        <div className="schedule">
          <h2>Clientes agendados</h2>

          <ul>
            {appointments
              ? appointments.map(({ id, name, date, hour }) => {
                  return (
                    <li key={id}>
                      <div>
                        <p>{name}</p>
                        <span>{`${date} ás ${hour}`}</span>
                      </div>
                      <button>excluir</button>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <div className="service-content">
          <div className="service-header">
            <h2>Gerenciamento de Serviços</h2>

            <button onClick={() => openModal()}>Adicionar serviço</button>
            <h2>Tipos de serviços</h2>
          </div>

          <ul>
            {services.map((service) => {
              const price = parseFloat(service.price);

              return (
                <li
                  onClick={() => {
                    openModalServices();
                    setIdService(service.id);
                  }}
                  key={service.id}
                  id={service.id.toString()}
                >
                  <p>{service.name}</p>
                  <p>R$ {price.toFixed(2)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </StyledContainer>
    </>
  );
};
