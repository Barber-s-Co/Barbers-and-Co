import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ISchedulingFormData } from "../../components/Schedule";

export const ServicesContext = createContext({} as IServiesContext);

interface IServicesProviders {
  children: React.ReactNode;
}

interface IServiesContext {
  services: IServices[];
  setServices: React.Dispatch<React.SetStateAction<IServices[]>>;
  available: IAvailable[];
  appointments: IApointment[];
  postSchedule: (formData: ISchedulingFormData) => Promise<void>;
  deleteMyAppointments: (id: number) => Promise<void>;
}

interface IServices {
  name: string;
  id: number;
  price: string;
  userId: number;
}

interface IAvailable {
  weekDay: string;
  hour: Array<string>;
}

interface IApointment {
  hour: Array<string>;
  name: string;
  id: number;
  userId: number;
  date: string;
}

export const ServicesProvider = ({ children }: IServicesProviders) => {
  const [services, setServices] = useState<IServices[]>([]);
  const [available, setAvailable] = useState<IAvailable[]>([]);
  const [appointments, setAppointments] = useState<IApointment[]>([]);

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
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("/scheduling", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointments([...appointments, response.data]);
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

  const deleteMyAppointments = async (id: number) => {
    const token = localStorage.getItem("@TOKEN");
   
    try {
      const response = await api.delete(`/scheduling/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
    getSchedule();
    myAppointments();
  }, []);

  return (
    <ServicesContext.Provider value={{ services, available, postSchedule, appointments, setServices, deleteMyAppointments }}>
      {children}
    </ServicesContext.Provider>
  );
};
