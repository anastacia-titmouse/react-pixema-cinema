import styled from "styled-components";
import { Color, S1_3 } from "ui";

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  height: 54px;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.Primary_INPUT_BG};
  color: ${Color.Primary_TEXT};
  cursor: pointer;
  ${S1_3}

  & svg path, & svg circle {
    fill: ${Color.Primary_TEXT};
    stroke: ${Color.Primary_TEXT};
  }

  &:hover {
    color: ${Color.Primary_TEXT_LIGHT};

    & svg path,
    & svg circle {
      fill: ${Color.Primary_TEXT_LIGHT};
      stroke: ${Color.Primary_TEXT_LIGHT};
    }
  }

  &.transparent {
    background-color: transparent;
  }

  &.primary {
    background-color: ${Color.Primary};
    color: ${Color.White};

    &:hover {
      background-color: ${Color.Primary_Light};
      color: ${Color.Primary_TEXT};
    }

    & svg path,
    & svg circle {
      fill: ${Color.Primary_TEXT};
      stroke: ${Color.Primary_TEXT};
    }
  }

  &.grid {
    grid-area: burger;
    background-color: ${Color.Primary};

    &:hover {
      background-color: ${Color.Primary_Light};
      color: ${Color.Primary_TEXT};
    }

    & svg path,
    & svg circle {
      fill: ${Color.Primary_TEXT};
      stroke: ${Color.Primary_TEXT};
    }

    &.is-mobile-menu-open {
      position: fixed;
      width: 36px;
      height: 36px;
      top: 5px;
      right: 5px;
      z-index: 999;
    }
  }

  &:disabled {
    &:hover {
      background-color: ${Color.Secondary};
      color: ${Color.Primary_TEXT_LIGHT};

      & svg path,
      & svg circle {
        fill: ${Color.Primary_TEXT_LIGHT};
        stroke: ${Color.Primary_TEXT_LIGHT};
      }
    }
    background-color: ${Color.Secondary};
    color: ${Color.Primary_TEXT_LIGHT};

    & svg path,
    & svg circle {
      fill: ${Color.Primary_TEXT_LIGHT};
      stroke: ${Color.Primary_TEXT_LIGHT};
    }

    &.transparent {
      background-color: transparent;
    }
  }
`;
