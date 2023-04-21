import styled from "styled-components";

export const StyledTechnologiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3125rem;

  .techTitle__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2rem;

    h2 {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.125rem;
      color: #f8f9fa;
    }

    button {
      background: #212529;
      border-radius: 0.25rem;
      border-style: none;
      width: 2rem;
      height: 2rem;
      cursor: pointer;

      img {
        width: 0.6563rem;
        height: 0.6563rem;
      }
    }
    button:hover {
      background: #343b41;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.375rem 1.1875rem;
    gap: 1rem;
    width: 100%;
    background: #212529;
    border-radius: 0.25rem;
  }

  p {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding-top: 6.25rem;
  }
`;
