import styled from "styled-components";
import { Color, H1 } from "ui";
import { INPUT } from "../../ui/typography";

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

export const MovieDescription = styled.p`
  margin: 40px 0;
  color: ${Color.Primary_TEXT};
  max-width: 878px;
  ${INPUT}
`;

export const MovieDetails = styled.div`
  max-width: 878px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  color: ${Color.Primary_TEXT};
  ${INPUT}
`;
