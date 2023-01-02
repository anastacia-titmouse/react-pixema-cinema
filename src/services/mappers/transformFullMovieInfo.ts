import { IFullMovieInfo, IFullMovieInfoDto, PgRating } from "types";

const adjustPgRating = (rating: string): PgRating => {
  switch (rating) {
    case "PG-13":
      return PgRating.pg13;
    case "G":
      return PgRating.g;
    case "PG":
      return PgRating.pg;
    case "R":
      return PgRating.r;
    case "NC-17":
      return PgRating.nc17;
    default:
      return PgRating.notRated;
  }
};

export const transformFullMovieInfo = (movie: IFullMovieInfoDto): IFullMovieInfo => {
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
  } = movie;

  return {
    title: Title,
    year: Year,
    rated: adjustPgRating(Rated),
    released: Released,
    runtime: Runtime,
    genres: Genre.split(","),
    director: Director,
    writer: Writer,
    actors: Actors.split(","),
    plot: Plot,
    language: Language,
    country: Country,
    awards: Awards,
    poster: Poster,
    metaScore: Metascore,
    imdbRating,
    imdbVotes,
    imdbId: imdbID,
    type: Type,
    dvd: DVD,
    boxOffice: BoxOffice,
  };
};
