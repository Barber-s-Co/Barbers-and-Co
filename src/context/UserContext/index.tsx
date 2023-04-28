import { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../../components/Form/LoginForm";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

interface IUserContext {
  userLogin: (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  user: IUser | null;
}

interface IUser {
  email: string;
  name: string;
  id: number;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserProviders {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProviders) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/shop");
      } catch (error) {
        toast.error("Sessão expirada! Refaça o Login.");
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const navigate = useNavigate();

  const userLogin = async (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", String(data.user.id));
      setUser(data.user);
      navigate("/shop");
    } catch (error) {
      toast.error("Usuário não cadastrado");
    } finally {
      setLoading(false);
    }
  };

  const UserRegister = () => {};
  
  return (
    <UserContext.Provider value={{ userLogin, user }}>
      {children}
    </UserContext.Provider>
  );
  
};
