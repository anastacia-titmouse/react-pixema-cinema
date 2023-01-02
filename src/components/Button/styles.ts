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

  &.primary {
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
  }
`;
