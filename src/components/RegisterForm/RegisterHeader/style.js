import styled from "styled-components";

export const StyledRegisterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 18.5rem;
  width: 100%;
  padding-top: 3.625rem;
  align-items: center;
  margin: 0 auto;

  img {
    width: 7.6288rem;
    height: 1.3256rem;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
    gap: 0.6344rem;
    width: 4.2181rem;
    height: 2.5069rem;
    border-style: none;
    background: var(--grey-3);
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.75rem;
    text-align: center;
    color: var(--grey-0);
    cursor: pointer;
  }
  button:hover {
    background: var(--grey-2);
  }

  @media screen and (min-width: 425px) {
    max-width: 23.125rem;
  }
`;
