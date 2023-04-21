import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledHome } from "./style";
import { TechnologiesList } from "../../components/TechnologiesList";
import { ModalTech } from "../../components/fragments/Modal";
import { Toaster } from "react-hot-toast";

export const Home = () => {
  const { user, handleLogout } = useContext(UserContext);

  const { name, course_module } = user;

  return (
    <>
      <Toaster />
      <StyledHome>
        <header>
          <img src={Logo} alt="Logo KenzieHub" />
          <button onClick={handleLogout}>Sair</button>
        </header>
        <main>
          <div className="user__container">
            <div className="container__inside">
              <h2>Olá, {name}</h2>
              <p>{course_module}</p>
            </div>
          </div>
          <div className="tech__container">
            <TechnologiesList />
          </div>
        </main>
      </StyledHome>
    </>
  );
};
