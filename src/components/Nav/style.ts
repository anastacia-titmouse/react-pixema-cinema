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
  display: grid;
  grid-template-columns: 50px 1fr;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: ${Color.Secondary};

  &:hover {
    color: ${Color.Primary};
  }
`;
