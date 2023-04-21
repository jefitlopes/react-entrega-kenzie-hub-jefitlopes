import { List } from "./List";
import { StyledTechnologiesList } from "./style";
import PlusSign from "../../assets/+.svg";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { ModalTech } from "../fragments/Modal";

export const TechnologiesList = () => {
  const { techList, openModal, modal } = useContext(TechContext);

  return (
    <StyledTechnologiesList>
      <div className="techTitle__container">
        <h2>Tecnologias</h2>
        <button className="btnAddTech" onClick={() => openModal()}>
          <img src={PlusSign} alt="Plus Sign" />
        </button>
        {modal ? <ModalTech /> : null}
      </div>
      {techList.length > 0 ? (
        <ul>
          <List />
        </ul>
      ) : (
        <div>
          <p className="message__empty">
            Ainda não há nenhuma tecnologia cadastrada
          </p>
        </div>
      )}
    </StyledTechnologiesList>
  );
};
