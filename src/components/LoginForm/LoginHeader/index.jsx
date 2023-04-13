import Logo from "../../../assets/Logo.svg";
import { StyledLoginHeader } from "./style";

export const LoginHeader = () => {
  return (
    <StyledLoginHeader>
      <img src={Logo} alt="Logo KenzieHub" />
    </StyledLoginHeader>
  );
};
