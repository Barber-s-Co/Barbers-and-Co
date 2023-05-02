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
  appointments: IServices[];
  postSchedule: (formData: ISchedulingFormData) => Promise<void>;
}

interface IServices {
  filter(arg0: (t: any) => boolean): IServices;
  weekDay: string;
  name: string;
  id: number;
  price: number;
  userId: number;
  hour: Array<string>;
  date: string;
  time: string;
}

export const ServicesProvider = ({ children }: IServicesProviders) => {
  const [services, setServices] = useState<IServices[]>([]);
  const [available, setAvailable] = useState<IServices[]>([]);
  const [appointments, setAppointments] = useState([]);

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

    try {
      const response = await api.post("/scheduling", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const myAppointments = async () => {
    try {
      const response = await api.get("/scheduling");
      const id = localStorage.getItem("@USERID") || "null";
      const userID = parseInt(id);

      setAppointments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
    getSchedule();
    myAppointments();
  }, [appointments]);

  return <ServicesContext.Provider value={{ services, available, postSchedule, appointments }}>{children}</ServicesContext.Provider>;
};
