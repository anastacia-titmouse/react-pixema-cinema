import { IMovie, IShortMovieInfoDto } from "types";

export const transformMovies = (movies: IShortMovieInfoDto[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID: imdbId, Genre }) => ({
    imdbId,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
    genre: Genre,
  }));
