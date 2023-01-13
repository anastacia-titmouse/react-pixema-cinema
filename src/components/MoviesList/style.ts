import styled from "styled-components";
import { Media } from "ui";

export const StyledList = styled.ul`
  display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  width: 100%;

  ${Media.Desktop_L} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
  }

  ${Media.Desktop_M} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
  }

  ${Media.Tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }
`;
