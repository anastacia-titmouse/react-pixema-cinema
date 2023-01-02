import styled from "styled-components";

export const MovieControlButtonsStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1px;

  & > * {
    width: 100%;
    border-radius: 0;

    &:first-child {
      border-radius: 10px 0 0 10px;
    }

    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }
`;
