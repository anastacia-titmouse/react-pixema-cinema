import styled from "styled-components";
import { Color } from "ui";
import { INPUT } from "ui/typography";

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
  border: 1px solid ${Color.Graphite};
  ${INPUT}

  &.active {
    background: ${Color.Graphite};
  }

  &.active,
  &:hover {
    color: ${Color.White};
  }
`;
