import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ISchedulingFormData } from "../../components/Schedule";

export const ServicesContext = createContext({} as IServiesContext);

interface IServicesProviders {
  children: React.ReactNode;
}

interface IServiesContext {
  services: IServices[];
  available: IServices[];
  postSchedule: (formData: ISchedulingFormData) => Promise<void>;
  
}

interface IServices {
  name: string;
  id: number;
  price: number;
  userId: number;
  hour: string;
}

export const ServicesProvider = ({ children }: IServicesProviders) => {
  const [services, setServices] = useState<IServices[]>([]);
  const [available, setAvailable] = useState<IServices[]>([]);

  const getServices = async () => {
    try {
      const response = await api.get("/services");
      setServices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSchedule = async () => {
    try {
      const response = await api.get("/available");
      setAvailable(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postSchedule = async (formData: ISchedulingFormData) => {
    console.log(formData);
    const token = localStorage.getItem("@TOKEN");
    const stringID = localStorage.getItem("@USERID")
    // const id = parseInt(stringID)
    // console.log(id)
    try {
      const response = await api.post("/scheduling", [{ ...formData, userId: 2 }], {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
    getSchedule();
   
  }, []);

  return <ServicesContext.Provider value={{ services, available, postSchedule }}>{children}</ServicesContext.Provider>;
};
