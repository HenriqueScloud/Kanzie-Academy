import { createContext, useEffect, useState } from "react";
import { API } from "../services/api";
export const TechContext = createContext({});
// eslint-disable-next-line react/prop-types
export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [onCreateModal, setOnCreateModal] = useState(false);
  const [editCardTech, setEditCardTech] = useState(null);

  useEffect(() => {
    const getTechs = async () => {
      const token = localStorage.getItem("token");
      const { data } = await API.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList(data.techs);
    };
    getTechs();
  }, []);

  const EditCardTech = async (formData) => {
    const token = localStorage.getItem("token");
    console.log(formData);

    const { data } = await API.put(`/users/techs/${editCardTech.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data)
    const newTechList = techList.map((item) => {
      if (item.id == editCardTech.id) {
        console.log("item novo");
        return data;
      } else {
        console.log('item antigo');
        return item;
      }
    });
    setTechList([...newTechList]);
    setEditCardTech(null);
  };

  const CreateTechModal = async (formData) => {
    // console.log(formData);

    const token = localStorage.getItem("token");

    const { data } = await API.post("/users/techs", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTechList([...techList, data]);
  };

  const removeTech = async (idTech) => {
    const token = localStorage.getItem("token");
    await API.delete(`/users/techs/${idTech}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newTechList = techList.filter((item) => item.id !== idTech);
    setTechList(newTechList);
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        setTechList,
        CreateTechModal,
        removeTech,
        setOnCreateModal,
        onCreateModal,
        setEditCardTech,
        editCardTech,
        EditCardTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
