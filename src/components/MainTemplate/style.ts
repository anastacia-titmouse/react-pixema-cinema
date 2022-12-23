import styled from "styled-components";
import { Color } from "ui";

export const MainTemplateStyled = styled.div`
  min-height: 100vh;
  width: 1920px;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr 80px;
  grid-template-areas:
    "header header"
    "nav outlet"
    "footer footer";
`;

export const Outlet = styled.div`
  grid-area: outlet;
`;
