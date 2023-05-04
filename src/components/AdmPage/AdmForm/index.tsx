import { useContext } from "react";
import { ServicesContext } from "../../../context/ServicesContext";
import { ModalBackdrop, StyledContainer } from "./styled";
import { Input } from "../../Form/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AdmContext, IServiceAdm } from "../../../context/AdmContext";
import { ToastContainer } from "react-toastify";
import { ModalEditService } from "../Modal";

interface IModal {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  openModalServices: () => void;
  closeModalServices: () => void;
  modalServices: boolean;
}

export const AdmForm = ({ openModal, closeModal, isModalOpen, openModalServices, closeModalServices, modalServices }: IModal) => {
  const { appointments, services } = useContext(ServicesContext);
  const { addServices, editServices, setIdService, deleteServices } = useContext(AdmContext);
console.log(modalServices)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit: SubmitHandler<IServiceAdm> = (formData) => {
    const id = localStorage.getItem("@USERID") || "null";
    const userID = parseInt(id);

    const data = {
      ...formData,
      userId: userID,
    };
    addServices(data);
  };

  return (
    <>
      <ToastContainer />
      {isModalOpen ? (
        <ModalBackdrop>
          <div className="modal">
            <div className="modal-content">
              <span onClick={() => closeModal()}>X</span>
              <h2>Criar serviço</h2>
              <form onSubmit={handleSubmit(submit as SubmitHandler<FieldValues>)}>
                <label>
                  Criar serviço
                  <Input type="text" placeholder="" id="service" {...register("name")} />
                </label>
                <label>
                  Valor do serviço
                  <Input type="text" placeholder="" id="price" {...register("price")} />
                </label>
                <button type="submit">criar serviço</button>
              </form>
            </div>
          </div>
        </ModalBackdrop>
      ) : (
        <StyledContainer>
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
                      openModalServices(), setIdService(service.id);
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

            {modalServices ? (
              <ModalEditService
                modalServices={modalServices}
                closeModalServices={closeModalServices}
                editServices={editServices}
                deleteServices={deleteServices}
              />
            ) : null}
          </div>
        </StyledContainer>
      )}
    </>
  );
};
