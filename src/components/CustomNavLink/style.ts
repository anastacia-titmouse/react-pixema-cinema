import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const NavLinkStyled = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  font-size: 18px;
  color: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Secondary}`)};

  &:hover {
    color: ${Color.Primary};
  }
`;
