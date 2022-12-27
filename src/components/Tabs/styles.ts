import styled from "styled-components";
import { Color } from "ui";
import { TAB } from "ui/typography";

export const TabsStyled = styled.div`
  width: 100%;
  height: 56px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  & > :first-child {
    border-radius: 10px 0 0 10px;
  }

  & > :last-child {
    border-radius: 0 10px 10px 0;
  }
`;

export const TabStyled = styled.button`
  width: 100%;
  height: 56px;
  outline: none;
  background: ${Color.Dark};
  color: ${Color.Secondary};
  border-top: 1px solid ${Color.Graphite};
  border-bottom: 1px solid ${Color.Graphite};
  border-right: none;
  border-left: none;
  ${TAB}

  &:last-child {
    border-right: 1px solid ${Color.Graphite};
  }

  &:first-child {
    border-left: 1px solid ${Color.Graphite};
  }

  &.active {
    background: ${Color.Graphite};
    border: 1px solid ${Color.Black};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  &.active,
  &:hover {
    color: ${Color.White};
  }
`;
