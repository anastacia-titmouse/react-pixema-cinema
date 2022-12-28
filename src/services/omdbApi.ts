import axios from "axios";
import { IResponseAPI, IMovieInfoAPI } from "types";

class OmdbApi {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_OMDB_API;
  private readonly keyAPI = process.env.REACT_APP_BASE_URL_KEY_API;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
    params: {
      apikey: this.keyAPI,
    },
  });

  public async getMovieById(id: string) {
    const params = {
      i: id,
      plot: "full",
    };
    const { data } = await this.API.get<IMovieInfoAPI>("", { params });
    return data;
  }

  public async getMoviesBySearch(keyword: string): Promise<IMovieInfoAPI[]> {
    const { data } = await this.API.get<IResponseAPI>("", {
      params: { s: keyword },
    });

    if (data.Response === "False") {
      return [];
    }

    const moviesIds = data.Search.map((movie) => movie.imdbID);
    return Promise.all(moviesIds.map((id) => this.getMovieById(id)));
  }
}

export const OmdbAPI = new OmdbApi();
