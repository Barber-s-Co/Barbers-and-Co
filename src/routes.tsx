import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProtectRoutes } from "./components/ProtectRoutes";
import { ServicesProvider } from "./context/ServicesContext";
import { UserPage } from "./pages/UserPage";

export const Router = () => {
  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/userPage" element={<ProtectRoutes />}>
      <Route
        index
        element={
          <ServicesProvider>
            <UserPage/>
          </ServicesProvider>
        }
      />
    </Route>
  </Routes>
  );
};
