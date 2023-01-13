import styled from "styled-components";
import { Color, Media } from "ui";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
  grid-area: nav;

  ${Media.Tablet} {
    width: 0;
    overflow: hidden;
    padding: 56px 32px 0 32px;

    &.is-open {
      width: 248px;
    }
  }

  ${Media.Desktop_M} {
    width: 0;
    overflow: hidden;

    &.is-open {
      width: 248px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 5px;
  color: ${Color.Secondary};
  background-color: ${Color.Dark};
  border-radius: 10px;
`;
