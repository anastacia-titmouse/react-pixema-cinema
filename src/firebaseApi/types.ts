export interface IUserLoginRequestPayload {
  email: string;
  password: string;
}

export interface IUserRegisterRequestPayload {
  name: string;
  email: string;
  password: string;
}

export enum FirebaseCollections {
  movies = "movies",
  genres = "genres",
  countries = "countries",
  users = "users",
}

export interface IMovieModel {
  imdbId: string;
  title: string;
  type: string;
  posterUrl: string;
  imdbRating: string;
  countryIds: string[];
  genreIds: string[];
}

export interface IGenreModel {
  id: string;
  title: string;
}

export interface ICountryModel {
  id: string;
  title: string;
}

export interface IUserModel {
  authProvider: string;
  email: string;
  name: string;
  uid: string;
}
