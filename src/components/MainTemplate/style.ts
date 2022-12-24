import styled from "styled-components";

export const MainTemplateStyled = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr 80px;
  grid-template-areas:
    "header header"
    "nav outlet"
    "footer footer";
`;
