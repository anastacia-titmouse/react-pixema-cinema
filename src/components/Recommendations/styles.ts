import styled from "styled-components";
import { Color, H2, Media } from "ui";

export const RecommendationsStyled = styled.div``;

export const Header = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
  color: ${Color.Primary_TEXT};
  ${H2}
`;

export const RecommendationsButtonGroup = styled.div`
  align-self: flex-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > * {
    font-size: 36px;
    padding: 0 12px 12px 0;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;

  ${Media.Tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
  }
`;
