import styled from "styled-components";
import { Media } from "ui";

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 4fr 1fr;
  grid-template-areas: "logo search user";
  grid-column-gap: 41px;
  grid-area: header;
  width: 100%;

  ${Media.Desktop_M} {
    grid-template-columns: 0.2fr 4fr 60px;
    grid-template-areas: "logo search burger";
    grid-column-gap: 32px;
  }

  ${Media.Tablet} {
    grid-template-columns: 0.5fr 4fr 60px;
    grid-template-areas: "logo search burger";
    grid-column-gap: 32px;

    &.is-open {
      grid-template-columns: 0 4fr 92px;
      grid-gap: 0;

      & > *:last-child {
        margin-left: 32px;
      }
    }
  }

  ${Media.Mobile} {
    grid-template-areas:
      "logo logo burger"
      "search search search";
    grid-row-gap: 32px;
    padding-bottom: 40px;

    &.is-open {
      grid-template-columns: 0 4fr 92px;
      grid-column-gap: 0;
      grid-row-gap: 32px;
    }
  }
`;

export const LogoStyled = styled.div`
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: start;
  grid-area: logo;
  cursor: pointer;

  ${Media.Tablet} {
    width: 100%;
    padding: 0;
    justify-content: start;
  }
`;
