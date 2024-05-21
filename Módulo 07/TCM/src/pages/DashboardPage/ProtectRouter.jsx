import { useContext } from "react";
import { TodoContext } from "../../Providers/TodoContext";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectRoute = () => {
  const { user } = useContext(TodoContext);
  return user ? <Outlet /> : <Navigate to="/" />;
};
