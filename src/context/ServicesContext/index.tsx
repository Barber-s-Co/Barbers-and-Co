import { createContext } from "react";

export const ServicesContext = createContext({});

interface IServicesProviders {
  children: React.ReactNode;
}

export const ServicesProvider = ({ children }: IServicesProviders) => {
  return (
    <ServicesContext.Provider value={""}>{children}</ServicesContext.Provider>
  );
};
