import styled from "styled-components";
import { INPUT } from "ui/typography";
import { Color } from "ui";

export const ServerErrorStyled = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid ${Color.Error};
  color: ${Color.Error};
  ${INPUT}
`;
