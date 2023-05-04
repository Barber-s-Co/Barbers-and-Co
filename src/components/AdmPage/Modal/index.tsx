import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../Form/Input";
import { IEditServiceAdm, IServiceAdm } from "../../../context/AdmContext";

interface IModal {
  closeModalServices: () => void;
  modalServices: boolean;
  editServices: (formData: IEditServiceAdm) => Promise<void>;
  deleteServices: () => Promise<void>;
}
export const ModalEditService = ({ modalServices, closeModalServices, editServices, deleteServices }: IModal) => {
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
    console.log(data);
    editServices(data);
  };

  return (
    <>
     
        <div className="modal-services">
          <div className="modal-services--content">
            <span onClick={() => closeModalServices()}>X</span>
            <div>
              <p>Editar serviço</p>
              <form onSubmit={handleSubmit(submit as SubmitHandler<FieldValues>)}>
                <Input type="text" id="edit-price" placeholder="Editar preço" {...register("price")} />
                <button>Editar preço</button>
              </form>
              <button onClick={() => deleteServices()}>excluir Serviço</button>
            </div>
          </div>
        </div>
      
    </>
  );
};
