import styled from "styled-components";
import { Color, H3 } from "ui";

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
