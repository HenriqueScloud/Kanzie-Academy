import { Routes, Route } from 'react-router-dom'
import {Dashboard} from "../pages/DashboardPage/Dashboard"
import { Register } from "../pages/RegisterPage/Register";
import { Login } from "../pages/LoginPage/Login";

export const RoutesMain = () =>{
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </>
    );
}