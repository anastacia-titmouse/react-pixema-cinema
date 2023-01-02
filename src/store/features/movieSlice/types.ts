export type loading = "pending" | "succeed" | "failed";

export interface IFavoriteMovie {
  uid: string;
  imdbId: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}
