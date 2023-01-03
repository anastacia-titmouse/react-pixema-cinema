import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getImdbErrorMessage,
  IFavoriteMovieModel,
  isMovieExistsInFavorites,
  OmdbAPI,
  putFavoriteMovie,
  transformFullMovieInfo,
} from "services";
import { RootState } from "../../store";
import { IFullMovieInfo } from "types";

export interface MovieDetailsState {
  imdbId: string;
  movie: IFullMovieInfo | null;
  isMovieLoading: boolean;
  isFavoriteMovie: boolean;
  isPushToFavoritesLoading: boolean;
}

export const movieDetailsInitialState: MovieDetailsState = {
  imdbId: "",
  movie: null,
  isMovieLoading: false,
  isFavoriteMovie: false,
  isPushToFavoritesLoading: false,
};

export const fetchMovieById = createAsyncThunk<
  { movieInfo: IFullMovieInfo; isFavoriteMovie: boolean },
  string,
  { rejectValue: string; state: RootState }
>("movieDetailsSlice/fetchById", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { uid: userId } = state.user;

  try {
    const response = await OmdbAPI.getMovieById(payload);
    const movieInfo = transformFullMovieInfo(response);
    const isFavoriteMovie = await isMovieExistsInFavorites({ userId, imdbId: payload });

    return { movieInfo, isFavoriteMovie };
  } catch (error) {
    return rejectWithValue(getImdbErrorMessage(error));
  }
});

export const addMovieToFavorites = createAsyncThunk<
  void,
  Omit<IFavoriteMovieModel, "uid">,
  { rejectValue: string; state: RootState }
>("movieDetailsSlice/addMovieToFavorites", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { uid } = state.user;

  try {
    if (uid) {
      return putFavoriteMovie({ ...payload, uid });
    }
  } catch (error) {
    return rejectWithValue(getImdbErrorMessage(error));
  }
});

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: movieDetailsInitialState,
  reducers: {
    resetMovieDetails: (state) => {
      return { ...movieDetailsInitialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.pending, (state) => {
      state.isMovieLoading = true;
    });

    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.isMovieLoading = false;
      state.isFavoriteMovie = action.payload.isFavoriteMovie;
      state.movie = action.payload.movieInfo;
    });

    builder.addCase(addMovieToFavorites.pending, (state) => {
      state.isPushToFavoritesLoading = true;
    });

    builder.addCase(addMovieToFavorites.fulfilled, (state, action) => {
      state.isPushToFavoritesLoading = false;
      state.isFavoriteMovie = true;
    });
  },
});

export const { resetMovieDetails } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
