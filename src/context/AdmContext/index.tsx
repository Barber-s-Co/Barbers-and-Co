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
  openModalServices: () => void;
  setModalServices: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
  modalServices: boolean;
  isModalOpen: boolean;
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setServices, services } = useContext(ServicesContext);

  const closeModalServices = () => setModalServices(false);
  const openModalServices = () => {
    setModalServices(true);
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addServices = async (formData: IServiceAdm) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("/services", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      closeModal();
      setServices([...services, response.data]);
      toast.success("Serviço cadastrado");
    } catch (error) {
      toast.error('Ops! Algo deu errado')
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
      const updatedServices = services.map((service) => {
        if (service.id === idService) {
          return { ...service, ...formData };
        }
        return service;
      });

      setServices(updatedServices);
      closeModalServices();
      toast.success("Serviço editado");
    } catch (error) {
      toast.error('Ops! Algo deu errado')
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
      const updatedServices = services.filter((service) => service.id !== idService);

      setServices(updatedServices);
      closeModalServices();
      toast.success("Serviço excluído");
    } catch (error) {
      toast.error('Ops! Algo deu errado')
    }
  };

  return (
    <AdmContext.Provider
      value={{
        addServices,
        editServices,
        deleteServices,
        setIdService,
        closeModalServices,
        setModalServices,
        modalServices,
        closeModal,
        openModal,
        openModalServices,
        isModalOpen,
      }}
    >
      {children}
    </AdmContext.Provider>
  );
};
