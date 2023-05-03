import { useContext, useState } from "react";
import { StyledContainer } from "../../Schedule/style";
import { ServicesContext } from "../../../context/ServicesContext";
import { StyledServicesContainer, ModalBackdrop } from "./styled";
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
  const { addServices, editServices } = useContext(AdmContext);
  const [test, setTest] = useState(0);

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

          <StyledServicesContainer>
            <div className="service-content">
              <h2>Gerenciamento de Serviços</h2>

              <button onClick={() => openModal()}>Adicionar serviço</button>

              <ul>
                <h2>Tipos de serviços</h2>
                {services.map((service) => {
                  return (
                    <li
                      onClick={() => {
                        openModalServices(), setTest(service.id);
                      }}
                      key={service.id}
                      id={service.id}
                    >
                      <p>{service.name}</p>
                      <p>{service.price}</p>
                    </li>
                  );
                })}
                <ModalEditService modalServices={modalServices} closeModalServices={closeModalServices} editServices={editServices} />
              </ul>
            </div>
          </StyledServicesContainer>
        </StyledContainer>
      )}
    </>
  );
};
