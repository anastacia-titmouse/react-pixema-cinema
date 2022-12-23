import styled from "styled-components";
import { Color } from "ui";

export const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-area: footer;
  padding: 20px 30px;
`;

export const SubTitle = styled.h6`
  color: ${Color.Light};
`;
