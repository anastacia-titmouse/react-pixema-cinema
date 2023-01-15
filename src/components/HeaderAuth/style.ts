import styled from "styled-components";
import { Media } from "ui";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding-left: 60px;

  ${Media.Mobile} {
    justify-content: center;
    padding: 0;
  }

  & svg {
    cursor: pointer;
  }
`;
