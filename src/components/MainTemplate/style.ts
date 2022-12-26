import styled from "styled-components";

export const MainTemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-column-gap: 146px;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header header"
    "nav outlet";
  padding: 40px 62px 64px 62px;
`;
