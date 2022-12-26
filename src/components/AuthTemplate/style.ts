import styled from "styled-components";

const bg1 = "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4))";
const bg2 = "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))";
const bg3 = "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))";

export const AuthTemplateStyled = styled.div`
  display: grid;
  min-width: 100vw;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 80px;
  background-size: cover;
  background: ${bg1}, ${bg2}, no-repeat url("/background.png"), ${bg3};
`;
