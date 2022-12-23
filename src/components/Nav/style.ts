import styled from "styled-components";
import { Color } from "ui";

export const NavStyled = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 48px 60px 64px 62px;
`;

export const Button = styled.button`
  background-color: ${Color.Dark};
  color: ${Color.Secondary};
  border-radius: 10px;
  padding: 10px 5px;
`;
