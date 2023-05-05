import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../Form/Input";
import { IEditServiceAdm, IServiceAdm } from "../../../context/AdmContext";
import { useContext } from "react";
import { StyleModalAdd, StyledModalEdit } from "./style";

interface IModalEdit {
  closeModalServices: () => void;
  modalServices: boolean;
  editServices: (formData: IEditServiceAdm) => Promise<void>;
  deleteServices: () => Promise<void>;
}
export const ModalEditService = ({ modalServices, closeModalServices, editServices, deleteServices }: IModalEdit) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submit: SubmitHandler<IEditServiceAdm> = (formData) => {
    const id = localStorage.getItem("@USERID") || "null";
    const userID = parseInt(id);

    const data = {
      ...formData,
      userId: userID,
    };
    editServices(data);
  };

  return (
    <StyledModalEdit className="modal-services">
      <div className="modal-services--content">
        <span onClick={() => closeModalServices()}>X</span>
        <h2>Editar serviço</h2>

        <form onSubmit={handleSubmit(submit as SubmitHandler<FieldValues>)}>
          <Input type="text" id="edit-price" placeholder="Editar preço" {...register("price")} />
          <button className="btnEdit">Editar preço</button>
        </form>
        <button className="btnDelete" onClick={() => deleteServices()}>excluir Serviço</button>
      </div>
    </StyledModalEdit>
  );
};

interface IModalAdd {
  addServices: (formData: IServiceAdm) => Promise<void>;
  closeModal: () => void;
}

export const ModalAddServices = ({ closeModal, addServices }: IModalAdd) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const submit: SubmitHandler<IServiceAdm> = (formData) => {
    const id = localStorage.getItem("@USERID") || "null";
    const userID = parseInt(id);
    reset();

    const data = {
      ...formData,
      userId: userID,
    };
    addServices(data);
  };

  return (
    <StyleModalAdd className="modal">
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
    </StyleModalAdd>
  );
};
