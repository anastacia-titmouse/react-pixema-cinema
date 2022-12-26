import styled from "styled-components";
import { Color } from "ui";

export const SearchStyled = styled.input`
  align-self: center;
  width: 100%;
  height: 56px;
  background: ${Color.Primary_INPUT_BG};
  border-radius: 10px;
  outline: none;
  border: 1px solid ${Color.Primary_INPUT_BORDER};
  margin: 0 41px 0 0;
  box-sizing: border-box;
  padding: 16px 20px;
  font-family: "Exo2 Regular", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${Color.White};

  &:active,
  &:focus {
    border-color: ${Color.Primary};
  }
`;
