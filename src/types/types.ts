export interface IMovieInfoAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
}

export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
  genre: string;
}
export interface IMovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Genre: string;
}

export interface IResponseAPI {
  Search: IMovieAPI[];
  totalResult: string;
  Response: string;
}
interface IRating {
  Source: string;
  Value: string;
}

export enum MovieTypes {
  movie = "movie",
  series = "series",
  episode = "episode",
}

export interface IGetMoviesBySearchProps {
  keyword: string;
  yearOfRelease?: string | null;
  type?: MovieTypes | null;
}
