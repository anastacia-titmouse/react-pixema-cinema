import styled from "styled-components";
import { Media } from "ui";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  width: 100%;

  ${Media.Desktop_L} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${Media.Desktop_M} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${Media.Tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${Media.Mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
