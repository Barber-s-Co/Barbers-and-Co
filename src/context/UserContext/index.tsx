import { createContext } from "react";

export const UserContext = createContext({});

interface IUserProviders {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProviders) => {
  const UserRegister = () => {};

  return <UserContext.Provider value={""}>{children}</UserContext.Provider>;
};
