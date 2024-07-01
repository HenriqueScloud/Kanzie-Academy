import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage/Dashboard";
import { Register } from "../pages/RegisterPage/Register";
import { Login } from "../pages/LoginPage/Login";
import { ProtectRoute } from "../pages/DashboardPage/ProtectRouter";
export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};
