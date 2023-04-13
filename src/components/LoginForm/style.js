import styled from "styled-components";

export const StyledLoginForm = styled.main`
  background: var(--grey-3);
  border-radius: 0.1875rem;
  padding: 2.1056rem 1.1281rem;
  max-width: 18.5rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 0.9024rem;
    line-height: 1.375rem;
    color: var(--grey-0);
  }

  form {
    padding: 1.125rem 0 2.125rem 0;
    width: 100%;

    p {
      color: #e83f5b;
    }

    button {
      width: 100%;
      height: 2.4063rem;
      background: var(--color-primary);
      border-style: none;
      border-radius: 0.25rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;
      color: #ffffff;
      cursor: pointer;
    }

    button:hover {
      background: var(--color-primary-negative);
    }
  }

  p {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: var(--grey-1);
    padding-bottom: 1.375rem;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.3959rem;
    gap: 0.6344rem;
    width: 100%;
    height: 2.4063rem;
    background: var(--grey-1);
    border-style: none;
    border-radius: 0.25rem;
    font-weight: 500;
    font-size: 0.8022rem;
    line-height: 1.3125rem;
    color: var(--grey-0);
    cursor: pointer;
  }
  button:hover {
    background: var(--grey-2);
  }

  @media screen and (min-width: 425px) {
    max-width: 23.125rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2.625rem 1.125rem;

    h1 {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: var(--grey-0);
    }

    form {
      width: 20.25rem;

      button {
        height: 3rem;
      }
    }
    button {
      height: 3rem;
    }
  }
`;
