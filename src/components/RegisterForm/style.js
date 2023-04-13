import styled from "styled-components";

export const StyledRegisterForm = styled.main`
  max-width: 18.5rem;
  background: var(--grey-3);
  margin: 0 auto;
  margin-top: 2.5rem;
  margin-bottom: 2.875rem;
  padding: 2.625rem 1.125rem 1.75rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.375rem;

    h1 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: var(--grey-0);
    }

    p {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.375rem;
      color: var(--grey-1);
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0rem 1.3959rem;
        gap: 0.6344rem;
        width: 100%;
        height: 3rem;
        background: var(--color-primary-negative);
        border-style: none;
        border-radius: 0.25rem;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.625rem;
        color: #ffffff;
        cursor: pointer;
      }

      button:hover {
        background: var(--color-primary);
      }

      p {
        margin-top: -1.25rem;
        margin-bottom: 1.25rem;
        color: #e83f5b;
      }
    }
  }

  @media screen and (min-width: 425px) {
    max-width: 23.125rem;
  }
`;
