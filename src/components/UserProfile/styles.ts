import styled from "styled-components";
import { Color, Media } from "ui";

export const UserSettingsStyled = styled.div`
  grid-area: user;
  background-color: transparent;
  width: 267px;

  ${Media.Tablet} {
    display: none;
  }
`;

export const UserSettingButtonGroup = styled.div`
  width: 267px;

  & > *:first-child {
    border-bottom: 1px solid ${Color.Graphite};
  }
`;

export const UserSettingButton = styled.button`
  width: 100%;
  height: 55px;
  font-family: "Exo2 Regular", sans-serif;
  font-weight: 500;
  font-size: 16px;
  background-color: ${Color.Primary_BG};
  outline: none;
  border: none;
  color: ${Color.Primary_TEXT};

  &:hover {
    color: ${Color.Primary_Light};
  }

  &:active {
    color: ${Color.Primary};
  }
`;
