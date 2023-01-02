import styled from "styled-components";
import { Color, H1 } from "ui";

export const SingleMovieViewStyled = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-areas: "poster info" "poster info" "poster recommendations";
  grid-template-columns: 266px 1fr;
  grid-template-rows: 1fr 1fr 509px;
  grid-row-gap: 56px;
  grid-column-gap: 42px;
`;

export const PosterAndCtrlWrapper = styled.div`
  grid-area: poster;
`;

export const Poster = styled.img`
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 266/356;
  object-fit: cover;
  margin: 0 0 32px;
`;

export const MovieInfoWrapper = styled.div`
  grid-area: info;
`;

export const MovieTitle = styled.h1`
  color: ${Color.Primary_TEXT};
  ${H1}
`;

export const MovieBadgesGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 20px;
  margin: 24px 0 0 0;
`;
