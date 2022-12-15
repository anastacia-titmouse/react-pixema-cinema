import styled from "styled-components";
import { Color } from "../../ui";

export const SidebarStyled = styled.aside`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  padding: 48px 60px 64px 62px;
`;

export const SubTitle = styled.h6`
  color: ${Color.Light};
  align-self: end;
`;
