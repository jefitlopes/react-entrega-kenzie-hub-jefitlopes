import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";

export const RegisterHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={Logo} alt="Logo KenzieHub" />
      <button onClick={() => navigate("/login")}>Voltar</button>
    </div>
  );
};
