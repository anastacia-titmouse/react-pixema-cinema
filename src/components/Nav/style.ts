import styled from "styled-components";
import { Color, Media, S1_3 } from "ui";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
  grid-area: nav;

  ${Media.Tablet} {
    width: 0;
    overflow: hidden;

    &.is-open {
      width: 248px;
      padding: 0 32px;
    }
  }

  ${Media.Desktop_M} {
    width: 0;
    overflow: hidden;

    &.is-open {
      width: 200px;
      padding: 0 32px;
    }
  }

  ${Media.Mobile} {
    &.is-open {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: ${Color.Primary_BG};
    }
  }
`;

export const Button = styled.button`
  padding: 10px 5px;
  color: ${Color.Secondary};
  background-color: ${Color.Dark};
  border-radius: 10px;
`;

export const Username = styled.div`
  height: 56px;
  max-width: 174px;
  ${S1_3}
  line-height: 56px;
  color: ${Color.Secondary};
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LogOut = styled.p`
  ${S1_3}
  color: ${Color.Secondary};
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    color: ${Color.Primary};
  }
`;

export const User = styled.div`
  display: none;

  &.block {
    display: block;
  }
`;
