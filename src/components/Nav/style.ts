import styled from "styled-components";
import { Color } from "ui";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
  grid-area: nav;
`;

export const Button = styled.button`
  padding: 10px 5px;
  color: ${Color.Secondary};
  background-color: ${Color.Dark};
  border-radius: 10px;
`;
