import Logo from "../../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export const HomeHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <img src={Logo} alt="Logo KenzieHub" />
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};
