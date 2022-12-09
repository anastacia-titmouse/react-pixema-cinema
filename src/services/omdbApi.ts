import axios from "axios";
import { IResponseAPI, IMovieInfoAPI } from "../types/types";

class OmdbApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_OMDB_API;
  private readonly keyAPI = process.env.REACT_APP_BASE_URL_KEY_API;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    params: {
      apikey: this.keyAPI,
    },
  });

  public async getMovies(id: string) {
    const params = {
      i: id,
      plot: "full",
    };
    const { data } = await this.API.get<IMovieInfoAPI[]>("", { params });
    return data;
  }
  public async getMoviesBySearch(name: string, type: string, year?: number) {
    const params = {
      s: name,
      type,
      y: year,
    };
    const { data } = await this.API.get<IResponseAPI>("", { params });
    return data;
  }
}

export const OmdbAPI = new OmdbApi();
