import styled from "styled-components";
import { ChevronRight } from "assets";
import { Color } from "ui";

export const UserSettingsButtonStyled = styled.button`
  display: grid;
  grid-template-columns: 56px auto 24px;
  grid-column-gap: 5px;
  width: 264px;
  height: 56px;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;

  &.authorized svg.chevron {
    transform: rotate(90deg);
  }

  &:active {
    .initial-avatar {
      text-shadow: none;
    }

    svg.chevron path {
      stroke: ${Color.White};
    }
  }
`;

export const ChevronRightStyled = styled(ChevronRight)`
  width: 24px;
  height: 24px;
  padding: 5px 8px;
  box-sizing: border-box;
  align-self: center;
`;

export const UsernameStyled = styled.div`
  height: 56px;
  max-width: 174px;
  line-height: 56px;
  color: ${Color.Primary_TEXT};
  font-family: "Exo2 Regular", sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
