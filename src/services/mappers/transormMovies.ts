import { IMovie, IMovieAPI } from "../../types";

export const transformMovies = (movies: IMovieAPI[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID }) => ({
    imdbID,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
  }));
