import styled from "styled-components";

export const StyledList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0.75rem;
    background: #121214;
    border-radius: 0.25rem;
    cursor: pointer;

    h3 {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: #f8f9fa;
    }

    p {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.375rem;
      color: #868e96;
    }
  }
  li:hover {
    background: #343b41;
  }
`;
