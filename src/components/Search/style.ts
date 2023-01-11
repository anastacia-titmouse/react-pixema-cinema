import styled from "styled-components";
import { Color } from "ui";

export const SearchForm = styled.form`
  grid-area: search;
  position: relative;
  width: 100%;
  height: 56px;

  &.filter-active .search-filter-button:before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: ${Color.Primary};
    position: absolute;
    transform: translate(-7px, 5px);
  }
`;

export const FilterButton = styled.button`
  display: flex;
  height: 56px;
  width: 56px;
  outline: none;
  border: none;
  background: transparent;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const SearchStyled = styled.input`
  align-self: center;
  width: 100%;
  height: 56px;
  background: ${Color.Primary_INPUT_BG};
  border-radius: 10px;
  outline: none;
  border: 1px solid ${Color.Primary_INPUT_BORDER};
  box-sizing: border-box;
  padding: 16px 76px 16px 20px;
  font-family: "Exo2 Regular", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${Color.Primary_TEXT};

  &:active,
  &:focus {
    border-color: ${Color.Primary};
  }
`;
