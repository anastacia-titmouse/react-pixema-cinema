import styled from "styled-components";
import { Media } from "ui";

export const SettingsPageStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${Media.Mobile} {
    justify-content: center;
  }

  ${Media.Tablet} {
    justify-content: center;
  }

  ${Media.Desktop_S} {
    justify-content: center;
  }

  ${Media.Desktop_M} {
    justify-content: center;
  }
`;
