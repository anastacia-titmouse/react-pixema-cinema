import styled from "styled-components";
import { Color } from "ui";
import { INPUT } from "ui/typography";

export const InputStyled = styled.input`
  display: block;
  background-color: ${Color.Primary_INPUT_BG};
  outline: none;
  border: 1px solid ${Color.Primary_INPUT_BORDER};
  border-radius: 10px;
  height: 56px;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  color: ${Color.Primary_TEXT};
  ${INPUT}

  &:focus {
    border-color: ${Color.Primary};
  }

  &.error {
    border-color: ${Color.Error};
  }

  &:disabled {
    background-color: ${Color.Secondary};
    border-color: ${Color.Secondary};
  }
`;
