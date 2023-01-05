import styled from "styled-components";
import { Color } from "ui";

export const SwitchStyled = styled.div`
  position: relative;
  width: 32px;
  height: 20px;
  background-color: ${Color.Secondary};
  border-radius: 10px;

  .switch-track {
    top: 2px;
    left: 2px;
  }

  &.switch-checked {
    background-color: ${Color.Primary};

    .switch-track {
      right: 2px;
      left: auto;
    }
  }
`;

export const SwitchTrack = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: ${Color.White};
  border-radius: 100%;
`;
