import { ChevronRight } from "assets";
import styled from "styled-components";
import { Color } from "ui";

export const UserMenuStyled = styled.div`
  width: 264px;
  height: 56px;
  background-color: transparent;
  color: ${Color.White};
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 56px auto 24px;
  padding: 0;
  border: none;
  color: inherit;
  background-color: transparent;
`;

export const Initials = styled.div`
  background-color: ${Color.Primary};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: inherit;
  border-radius: 10px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const ChevronRightStyled = styled(ChevronRight)`
  width: 24px;
  height: 24px;
  padding-top: 10px;
  align-self: center;
`;

export const Menu = styled.ul`
  position: absolute;
  z-index: 1000;
`;
