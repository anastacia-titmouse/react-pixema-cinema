import styled from "styled-components";
import { Color } from "./ui";

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  width: 100%;
  min-height: 100vh;
  background: ${Color.Primary_BG};
`;
