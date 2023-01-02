import {
  MovieBadgesGroup,
  MovieInfoWrapper,
  MovieTitle,
  Poster,
  PosterAndCtrlWrapper,
  SingleMovieViewStyled,
} from "./styles";
import { IFullMovieInfo } from "types";
import { MovieControlButtons, GenresList, Badge, PgBadge } from "components";

export const SingleMovieView = ({ movie }: { movie: IFullMovieInfo }) => {
  const { genres, title, imdbRating, runtime, rated } = movie;
  return (
    <SingleMovieViewStyled>
      <PosterAndCtrlWrapper>
        <Poster src={movie.poster} />
        <MovieControlButtons
          onAddToFavouriteClick={() => {
            //TODO onAddToFavouriteClick handler
          }}
          onShareClick={() => {
            //TODO onShareClick handler
          }}
        />
      </PosterAndCtrlWrapper>
      <MovieInfoWrapper>
        <GenresList genres={genres} />
        <MovieTitle>{title}</MovieTitle>
        <MovieBadgesGroup>
          <Badge text={`IMDb ${imdbRating}`}></Badge>
          <Badge text={runtime}></Badge>
          <PgBadge rating={rated} />
        </MovieBadgesGroup>
      </MovieInfoWrapper>
      <div style={{ backgroundColor: "blue", gridArea: "recommendations" }}>
        {/*  TODO recommendations*/}
      </div>
    </SingleMovieViewStyled>
  );
};
