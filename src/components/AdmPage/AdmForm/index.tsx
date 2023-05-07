import { useContext } from "react";
import { ServicesContext } from "../../../context/ServicesContext";
import { ModalBackdrop, StyledContainer } from "./styled";
import { AdmContext } from "../../../context/AdmContext";
import { ToastContainer } from "react-toastify";
import { ModalAddServices, ModalEditService } from "../Modal";

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
  const { appointments, services, deleteMyAppointments } = useContext(ServicesContext);

  return (
    <>
      <ToastContainer theme="dark" />

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
                        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                        <span>{`${date.charAt(0).toUpperCase() + date.slice(1)} às ${hour}`}</span>
                      </div>
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
