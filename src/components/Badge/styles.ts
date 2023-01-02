import styled from "styled-components";
import { Color } from "ui";
import { BADGE } from "ui/typography";

export const BadgeStyled = styled.div`
  display: inline-block;
  padding: 2px 8px;
  background-color: ${Color.Graphite};
  color: ${Color.White};
  border-radius: 6px;
  ${BADGE}
`;
