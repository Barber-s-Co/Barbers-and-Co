import { createContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const AdmContext = createContext({} as IServiceContext);

interface IAdmProviders {
  children: React.ReactNode;
}

interface IServiceContext {
  addServices: (formData: IServiceAdm) => Promise<void>;
  editServices: (formData: IEditServiceAdm) => Promise<void>;
  deleteServices: (id: number) => Promise<void>
}

export interface IServiceAdm {
  name: string;
  price: string;
}

export interface IEditServiceAdm {
  price: string;
}

export const AdmProvider = ({ children }: IAdmProviders) => {
  const addServices = async (formData: IServiceAdm) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("/services", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Serviço cadastrado");
    } catch (error) {
      console.log(error);
    }
  };

  const editServices = async (formData: IEditServiceAdm) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch("/services", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Serviço editado");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteServices = async (id:number) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/services${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Serviço excluído");
    } catch (error) {
      console.log(error);
    }
  };

  return <AdmContext.Provider value={{ addServices, editServices, deleteServices }}>{children}</AdmContext.Provider>;
};
