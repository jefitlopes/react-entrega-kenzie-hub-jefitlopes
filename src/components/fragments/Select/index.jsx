import { forwardRef } from "react";
import { StyledSelectArea } from "./style";

export const Select = forwardRef(({ id, label, ...rest }, ref) => (
  <StyledSelectArea>
    <label>{label}</label>
    <select id={id} ref={ref} {...rest}>
      <option value="">Selecione o módulo</option>
      <option value="Primeiro módulo (Introdução ao Frontend)">
        Primeiro módulo (Introdução ao Frontend)
      </option>
      <option value="Segundo módulo (Frontend Avançado)">
        Segundo módulo (Frontend Avançado)
      </option>
      <option value="Terceiro módulo (Introdução ao Backend)">
        Terceiro módulo (Introdução ao Backend)
      </option>
      <option value="Quarto módulo (Backend Avançado)">
        Quarto módulo (Backend Avançado)
      </option>
    </select>
  </StyledSelectArea>
));
