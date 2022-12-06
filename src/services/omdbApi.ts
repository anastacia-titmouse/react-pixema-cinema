import axios from "axios";
import { IMovieInfoAPI } from "../types/types";

class OmdbApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_OMDB_API;
  private readonly keyAPI = process.env.REACT_APP_BASE_URL_KEY_API;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    params: {
      apikey: this.keyAPI,
    },
  });

  //   public async getAll() {
  //     const params = {
  //       fields: ["t", "type", "y"].join(","),
  //     };
  //     const { data } = await this.API.get<IMovie[]>(this.ENDPOINT.all, {
  //       params,
  //     });

  //     return data;
  //   }

  public async getMovies(id: string) {
    const params = {
      t: "batman",
      y: "2020",
      plot: "full",
    };
    const { data } = await this.API.get<IMovieInfoAPI[]>("", { params });
    return data;
  }
}

export const OmdbAPI = new OmdbApi();
