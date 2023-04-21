import { useContext } from "react";
import { StyledList } from "./style";
import { TechContext } from "../../../providers/TechContext";

export const List = () => {
  const { techList, openModal } = useContext(TechContext);
  return (
    <StyledList>
      {techList.map(({ id, title, status }) => (
        <li
          key={id}
          onClick={() => openModal({ id: id, title: title, status: status })}
        >
          <h3>{title}</h3>
          <p>{status}</p>
        </li>
      ))}
    </StyledList>
  );
};
