import styled from "styled-components";
import { Color, INPUT } from "ui";

export const FooterStyled = styled.footer`
  grid-area: footer;
  margin-top: auto;
`;

export const SubTitle = styled.h6`
  text-align: center;
  color: ${Color.Light};
  ${INPUT}
`;
