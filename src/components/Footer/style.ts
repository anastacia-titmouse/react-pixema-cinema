import styled from "styled-components";
import { Color } from "ui";
import { INPUT } from "ui/typography";

export const FooterStyled = styled.footer`
  grid-area: footer;
  margin-top: auto;
`;

export const SubTitle = styled.h6`
  text-align: center;
  color: ${Color.Light};
  ${INPUT}
`;
