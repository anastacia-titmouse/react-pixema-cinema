import styled from "styled-components";
import { Color } from "ui";

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
  font-family: "Exo2 Regular", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: ${Color.White};
  text-shadow: ${textShadow};
  text-transform: uppercase;
`;
