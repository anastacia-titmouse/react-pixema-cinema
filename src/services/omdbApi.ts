import axios from "axios";
import { IResponseDto, IFullMovieInfoDto, IGetMoviesBySearchProps } from "types";

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
    const { data } = await this.API.get<IFullMovieInfoDto>("", { params });
    if (data.Error) throw new Error(data.Error);
    return data;
  }

  public async getMoviesBySearch({
    keyword,
    yearOfRelease,
    type,
    page = 1,
  }: IGetMoviesBySearchProps): Promise<IResponseDto> {
    const params = { s: keyword, y: yearOfRelease, type, page };

    const { data } = await this.API.get<IResponseDto>("", {
      params,
    });
    if (data.Error) throw new Error(data.Error);
    return data;
  }
}

export const OmdbAPI = new OmdbApi();
