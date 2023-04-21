import { forwardRef } from "react";
import { StyledTech } from "./style";

export const SelectTech = forwardRef(({ id, label, ...rest }, ref) => (
  <StyledTech>
    <label>{label}</label>
    <select id={id} ref={ref} {...rest}>
      <option value="">Selecionar Status</option>
      <option value="Iniciante">Iniciante</option>
      <option value="Intermediário">Intermediário</option>
      <option value="Avançado">Avançado</option>
    </select>
  </StyledTech>
));
