import {
  MovieBadgesGroup,
  MovieDescription,
  MovieDetails,
  MovieInfoWrapper,
  MovieTitle,
  Poster,
  PosterAndCtrlWrapper,
  SingleMovieViewStyled,
} from "./styles";
import { IFullMovieInfo } from "types";
import { MovieControlButtons, GenresList, Badge, PgBadge } from "components";

export const SingleMovieView = ({ movie }: { movie: IFullMovieInfo }) => {
  const {
    genres,
    title,
    imdbRating,
    runtime,
    rated,
    plot,
    year,
    released,
    boxOffice,
    country,
    actors,
    director,
    writer,
    awards,
  } = movie;

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
        <MovieDescription>{plot}</MovieDescription>
        <MovieDetails>
          <div>Year</div>
          <div>{year}</div>

          <div>Released</div>
          <div>{released}</div>

          <div>Box office</div>
          <div>{boxOffice}</div>

          <div>Country</div>
          <div>{country}</div>

          <div>Awards</div>
          <div>{awards}</div>

          <div>Actors</div>
          <div>{actors}</div>

          <div>Director</div>
          <div>{director}</div>

          <div>Writer</div>
          <div>{writer}</div>
        </MovieDetails>
      </MovieInfoWrapper>
      <div style={{ backgroundColor: "blue", gridArea: "recommendations" }}>
        {/*  TODO recommendations*/}
      </div>
    </SingleMovieViewStyled>
  );
};
