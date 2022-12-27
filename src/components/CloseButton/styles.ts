import styled from "styled-components";
import { Color } from "ui";

export const CloseButtonStyled = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  outline: none;
  border: none;

  &:active {
    svg {
      path {
        fill: ${Color.White};
      }
    }
  }
`;
