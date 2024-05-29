import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectRoute = () => {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/" />;
};
