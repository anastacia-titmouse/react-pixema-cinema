import styled from "styled-components";
import { Color } from "../../ui";

export const NavStyled = styled.nav`
  display: grid;
  height: 30%;
`;

export const Button = styled.button`
  background-color: ${Color.Dark};
  color: ${Color.Secondary};
  width: 80px;
  border-radius: 10px;
`;

export const NavLink = styled.a`
  color: ${Color.Secondary};
`;
