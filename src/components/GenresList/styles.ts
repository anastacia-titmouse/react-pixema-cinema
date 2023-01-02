import styled from "styled-components";
import { Color } from "ui";
import { INPUT } from "ui/typography";

export const GenresListStyled = styled.ul``;

export const GenresListItem = styled.li`
  display: inline-block;
  position: relative;
  margin: 0 20px 0 0;
  color: ${Color.Primary_TEXT};
  ${INPUT}

  &:after {
    content: "\u2022";
    display: block;
    position: absolute;
    right: -12px;
    top: 0;
  }

  &:last-child:after {
    display: none;
  }
`;
