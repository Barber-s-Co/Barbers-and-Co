import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoutes = () => {
  const token = localStorage.getItem("@TOKEN");

  return !token ? <Navigate to="/login" /> : <Outlet />;
};
