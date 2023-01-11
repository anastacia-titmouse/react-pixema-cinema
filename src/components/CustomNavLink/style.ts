import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

export const NavLinkStyled = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  align-items: center;
  font-size: 18px;
  color: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Secondary}`)};

  & svg path {
    stroke: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Secondary}`)};
    fill: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Secondary}`)};
  }

  &:hover {
    color: ${Color.Primary};

    & svg path {
      stroke: ${Color.Primary};
      fill: ${Color.Primary};
    }
  }
`;
