import styled from "styled-components";
import { Media } from "ui";

export const MainTemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-column-gap: 146px;
  grid-row-gap: 50px;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header header"
    "nav content";
  min-height: 100vh;
  padding: 40px 62px 64px;

  ${Media.Desktop_M} {
    grid-template-areas: "header nav" "content nav";
    grid-template-columns: 1fr auto;
    grid-column-gap: 0;
    padding: 40px 70px;
  }

  ${Media.Desktop_S} {
    grid-template-areas: "header nav" "content nav";
    grid-template-columns: 1fr auto;
    grid-column-gap: 0;
    padding: 40px 48px;
  }

  ${Media.Tablet} {
    grid-template-areas: "header nav" "content nav";
    grid-template-columns: 1fr auto;
    grid-column-gap: 0;
    padding: 40px 40px;
    width: 100%;

    ${Media.Mobile} {
      grid-template-rows: 144px 1fr;
      grid-row-gap: 40px;
      padding: 32px 24px;
    }
  }
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  width: 100%;
  overflow: hidden;
`;
