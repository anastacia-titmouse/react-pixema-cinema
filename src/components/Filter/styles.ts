import styled from "styled-components";
import { Color, H2 } from "ui";

export const Background = styled.div`
  position: fixed;
  display: grid;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 518px;
  right: 0;
  top: 0;
`;

export const FilterStyled = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  position: relative;
  width: 518px;
  height: 100vh;
  padding: 48px 40px;
  box-sizing: border-box;
  background: ${Color.Primary_FORM_BG};
  color: ${Color.Primary_TEXT};
  overflow: auto;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 24px;
  align-items: center;
  padding: 0 0 48px;
  height: 36px;
  ${H2}

  & button {
    align-self: center;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
  margin: 0 0 24px;
`;

export const Footer = styled.div`
  align-self: end;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  height: 56px;
`;
