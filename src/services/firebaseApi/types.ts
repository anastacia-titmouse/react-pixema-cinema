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
  favorites = "favorites",
  users = "users",
}

export interface IUserModel {
  authProvider: string;
  email: string;
  name: string;
  uid: string;
}

export interface IFavoriteMovieModel {
  uid: string;
  imdbId: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}
