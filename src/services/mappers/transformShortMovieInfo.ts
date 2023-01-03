import { IMovie, IShortMovieInfoDto } from "types";

export const transformShortMovieInfo = (movies: IShortMovieInfoDto[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID: imdbId }) => ({
    imdbId,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
  }));
