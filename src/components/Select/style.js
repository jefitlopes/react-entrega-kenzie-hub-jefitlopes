import styled from "styled-components";

export const StyledSelectArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  margin-bottom: 1.875rem;

  label {
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;
    color: var(--grey-0);
  }

  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem 1.0152rem;
    gap: 0.6344rem;
    height: 3rem;
    background: var(--grey-2);
    border-style: none;
    border-radius: 0.25rem;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;
    color: var(--grey-1);
  }
`;
