import { createContext, useEffect, useState } from "react";
import { API } from "../services/api";
import { useNavigate } from "react-router-dom";
export const TodoContext = createContext({});
// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const Navigate = useNavigate();
  useEffect(() => {
    const userAutoLogin = async () => {
      const idUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      if (idUser && token) {
        try {
          const { data } = await API.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          Navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      }
    };
    userAutoLogin();
  }, [Navigate]);
  const userRegister = async (formData, navigate) => {
    try {
      await API.post("/users", formData);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const userLogin = async (formData, Navigate) => {
    try {
      const { data } = await API.post("/sessions", formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user.id);
      setUser(data.user);
      Navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const userLogout = (navigate) => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TodoContext.Provider
      value={{ user, setUser, userRegister, userLogin, userLogout }}
    >
      {children}
    </TodoContext.Provider>
  );
};
