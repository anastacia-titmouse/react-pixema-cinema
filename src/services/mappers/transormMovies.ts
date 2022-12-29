import { IMovie, IMovieInfoAPI } from "types";

export const transformMovies = (movies: IMovieInfoAPI[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID }) => ({
    imdbID,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
  }));
