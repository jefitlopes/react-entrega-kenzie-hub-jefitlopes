import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = () => {
  const [techList, setTechList] = useState([]);
  const [object, setObject] = useState();
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem("@TOKEN");
  const headers = { authorization: `Bearer ${token}` };
  const { techs } = useContext(UserContext);

  const openModal = (item = null) => {
    setModal(true);
    item ? setObject(item) : setObject(null);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const techLoad = async () => {
      try {
        const { sub } = jwtDecode(token);
        const { data } = await api.get(`users/${sub}`, {
          headers,
        });
        setTechList(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    techs.length > 0 ? setTechList(techs) : techLoad();
  }, []);

  const techAdd = async (bodyTech) => {
    try {
      const { data } = await api.post("users/techs", bodyTech, { headers });
      setTechList([...techList, data]);
      setModal(false);
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      toast.error("Erro!");
    }
  };
  const techDelete = async (idTech) => {
    try {
      await api.delete(`users/techs/${idTech}`, { headers });
      const techListUpdated = techList.filter(({ id }) => id !== idTech);
      setTechList(techListUpdated);
      setModal(false);
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      toast.error("Erro!");
    }
  };
  const techEdit = async (bodyTech) => {
    try {
      const idTech = object.id;
      await api.put(`users/techs/${idTech}`, bodyTech, { headers });
      let indexTech;
      techList.find((tech, i) => (tech.id === idTech ? (indexTech = i) : null));
      const { status } = bodyTech;
      const techEdited = { ...object, status: status };
      const techEditedList = techList.filter(({ id }) => id !== idTech);
      techEditedList.splice(indexTech, 0, techEdited);
      setTechList(techEditedList);
      setModal(false);
      toast.success("Tecnologia editada com sucesso");
    } catch (error) {
      toast.error("Erro!");
    }
  };
  return (
    <TechContext.Provider
      value={{
        techList,
        openModal,
        closeModal,
        techAdd,
        techDelete,
        techEdit,
        modal,
        setModal,
        object,
      }}
    >
      <Outlet />
    </TechContext.Provider>
  );
};
