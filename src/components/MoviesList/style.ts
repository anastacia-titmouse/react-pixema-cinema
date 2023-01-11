import styled from "styled-components";
import { Media } from "ui";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row dense;
  grid-gap: 40px;
  width: 100%;

  ${Media.Desktop_M} {
    grid-template-columns: repeat(4, minmax(208px, 90%));
  }

  ${Media.Tablet} {
    grid-template-columns: repeat(3, minmax(208px, 90%));
  }

  ${Media.Mobile} {
    grid-template-columns: minmax(272px, 90%);
  }
`;
