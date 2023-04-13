import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { StyledHome } from "./style";

export const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      navigate("/login");
    } else {
      const fetchData = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();
    }
  }, [navigate]);

  return (
    <StyledHome>
      <header>
        <img src={Logo} alt="Logo KenzieHub" />
        <button onClick={handleLogout}>Sair</button>
      </header>
      <main>
        <div className="user__container">
          <div className="container__inside">
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </div>
        </div>
        <div className="message__container">
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </main>
    </StyledHome>
  );
};
