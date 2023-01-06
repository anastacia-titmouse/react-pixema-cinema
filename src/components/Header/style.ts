import styled from "styled-components";
import { Media } from "ui";

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 265px 1fr 267px;
  grid-column-gap: 41px;
  grid-area: header;
  width: 100%;
  overflow: hidden;
`;

export const LogoStyled = styled.div`
  width: 265px;
  padding: 0 105px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Media.Tablet} {
    display: none;
  }
`;
