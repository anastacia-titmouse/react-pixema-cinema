import styled from "styled-components";
import { Color, H3 } from "ui";

const textShadow = `2px 0 ${Color.Black}, -2px 0 ${Color.Black}, 0 2px ${Color.Black},
   0 -2px ${Color.Black}, 1px 1px ${Color.Black}, -1px -1px ${Color.Black}, 1px -1px ${Color.Black},
    -1px 1px ${Color.Black};`;

export const InitialsAvatarStyled = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: ${Color.Primary};
  display: flex;
  align-items: center;
  justify-content: center;
  ${H3};
  color: ${Color.White};
  text-transform: uppercase;
`;
