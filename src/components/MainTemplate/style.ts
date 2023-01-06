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
  padding: 40px 62px 64px 62px;

  ${Media.Tablet} {
    grid-template-areas: "header nav" "content nav";
    grid-template-columns: 1fr 0;
    grid-column-gap: 0;
    padding: 48px 40px;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  width: 100%;
  overflow: hidden;
`;
