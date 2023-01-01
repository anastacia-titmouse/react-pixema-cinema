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

export interface IFetchMoviesProps {
  keyword: string;
  yearOfRelease: string | null;
}
