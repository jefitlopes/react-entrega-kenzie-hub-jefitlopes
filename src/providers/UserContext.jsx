import { createContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const submit = async (loginBody) => {
    try {
      const { data } = await api.post("sessions", loginBody);
      const { user: userResponse, token } = data;
      localStorage.setItem("@TOKEN", token);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      setUser(userResponse);
    } catch (err) {
      setResponse(err.response);
      toast.error("Email e/ou Senha errado!");
    }
  };

  const handleRegister = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
    }
  };
  const techs = user?.techs || [];

  useEffect(() => {
    async function loadUser() {
      try {
        const token = localStorage.getItem("@TOKEN");
        if (!token) {
          navigate("/login");
        }
        const { sub } = jwtDecode(token);
        const { data } = await api.get(`users/${sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        localStorage.removeItem("@TOKEN");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        response,
        setResponse,
        submit,
        navigate,
        handleRegister,
        loading,
        techs,
        handleLogout,
        Navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
