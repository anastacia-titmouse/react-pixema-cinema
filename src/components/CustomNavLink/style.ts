import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color, S1 } from "ui";

export const NavLinkStyled = styled(NavLink)<{ $isActive: PathMatch<string> | null }>`
  display: flex;
  gap: 20px;
  align-items: center;
  ${S1}
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
