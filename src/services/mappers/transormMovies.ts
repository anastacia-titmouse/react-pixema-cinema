import { IMovie, IShortMovieInfoDto } from "types";

export const transformMovies = (movies: IShortMovieInfoDto[]): IMovie[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID, Genre }) => ({
    imdbID,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
    genre: Genre,
  }));
