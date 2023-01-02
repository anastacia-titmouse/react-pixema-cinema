export interface IFullMovieInfoDto {
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

export enum PgRating {
  pg13,
  g,
  pg,
  r,
  nc17,
  notRated,
}

export interface IFullMovieInfo {
  title: string;
  year: string;
  rated: PgRating;
  released: string;
  runtime: string;
  genres: string[];
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metaScore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbId: string;
  type: string;
  dvd: string;
  boxOffice: string;
}

export interface IMovie {
  title: string;
  year: string;
  imdbId: string;
  type: string;
  poster: string;
}

export interface IShortMovieInfoDto {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Genre: string;
}

export interface IResponseDto {
  Search: IShortMovieInfoDto[];
  totalResults: string;
  Response: "True" | "False";
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
  page?: number;
}
