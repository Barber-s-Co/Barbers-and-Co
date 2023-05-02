import { createContext } from "react";

export const AdmContext = createContext({})

interface IAdmProviders {
    children: React.ReactNode;
  }

  export const AdmProvider = ({ children }: IAdmProviders) => {

    return <AdmContext.Provider value={''}>{children}</AdmContext.Provider>;
  }