import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import { StyledRegisterHeader } from "./style";

export const RegisterHeader = () => {
  const navigate = useNavigate();

  return (
    <StyledRegisterHeader>
      <img src={Logo} alt="Logo KenzieHub" />
      <button onClick={() => navigate("/login")}>Voltar</button>
    </StyledRegisterHeader>
  );
};
