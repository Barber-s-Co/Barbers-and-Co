import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const ServicesContext = createContext({} as IServiesContext);

interface IServicesProviders {
  children: React.ReactNode;
}

interface IServiesContext {
  services: IServices[];
  available:IServices[];
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
console.log(services)
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


  useEffect(() => {
    getServices();
    getSchedule();
  }, []);

  return <ServicesContext.Provider value={{ services, available }}>{children}</ServicesContext.Provider>;
};
