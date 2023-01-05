import styled from "styled-components";
import { Media } from "ui";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding-left: 60px;

  ${Media.Mobile_S} {
    justify-content: center;
    padding: 0;
  }
`;
