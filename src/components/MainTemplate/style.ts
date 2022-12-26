import styled from "styled-components";

export const MainTemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-column-gap: 146px;
  grid-row-gap: 50px;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header header"
    "nav content";
  padding: 40px 62px 64px 62px;
`;

export const ContentWrapper = styled.div`
  grid-area: content;
  width: 100%;
  overflow: hidden;
`;
