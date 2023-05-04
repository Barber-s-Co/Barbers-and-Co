import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ServicesContext } from "../ServicesContext";

export const AdmContext = createContext({} as IServiceContext);

interface IAdmProviders {
  children: React.ReactNode;
}

interface IServiceContext {
  addServices: (formData: IServiceAdm) => Promise<void>;
  editServices: (formData: IEditServiceAdm) => Promise<void>;
  deleteServices: () => Promise<void>;
  setIdService: React.Dispatch<React.SetStateAction<number>>;
  closeModalServices: () => void;
  setModalServices: React.Dispatch<React.SetStateAction<boolean>>;
  modalServices: boolean;
}

export interface IServiceAdm {
  name: string;
  price: string;
}

export interface IEditServiceAdm {
  price: string;
}

export const AdmProvider = ({ children }: IAdmProviders) => {
  const [idService, setIdService] = useState(0);
  const [modalServices, setModalServices] = useState(false);
console.log(idService)

  const { setServices, services } = useContext(ServicesContext);

  const closeModalServices = () => setModalServices(false);

  const addServices = async (formData: IServiceAdm) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("/services", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModalServices(false)
      setServices([...services, response.data]);
      toast.success("Serviço cadastrado");
    } catch (error) {
      console.log(error);
    }
  };
  
  const editServices = async (formData: IEditServiceAdm) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(`/services/${idService}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Serviço editado");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteServices = async () => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/services/${idService}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Serviço excluído");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdmContext.Provider
      value={{ addServices, editServices, deleteServices, setIdService, closeModalServices, setModalServices, modalServices }}
    >
      {children}
    </AdmContext.Provider>
  );
};
