import styled from "styled-components";
import { Color, S1_3 } from "../../ui";

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  height: 54px;
  padding: 8px 24px;
  background-color: ${Color.Primary_INPUT_BG};
  color: ${Color.Primary_TEXT};
  ${S1_3}

  &:hover {
    color: ${Color.Primary_TEXT_LIGHT};
  }

  &.primary {
    background-color: ${Color.Primary};

    &:hover {
      background-color: ${Color.Primary_Light};
      color: ${Color.Primary_TEXT};
    }
  }

  &:disabled {
    &:hover {
      background-color: ${Color.Secondary};
      color: ${Color.Primary_TEXT_LIGHT};
    }
    background-color: ${Color.Secondary};
    color: ${Color.Primary_TEXT_LIGHT};
  }
`;
