import styled from "styled-components";
import { Media } from "ui";

export const SignInPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${Media.Mobile} {
    align-items: start;
  }
`;
