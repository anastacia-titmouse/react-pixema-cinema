import styled from "styled-components";

export const MainTemplateStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    header header
    aside main
    aside main;
`;
