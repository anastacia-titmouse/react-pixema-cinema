import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getFirebaseErrorMessage,
  getImdbErrorMessage,
  IFavoriteMovieModel,
  isMovieExistsInFavorites,
  putFavoriteMovie,
} from "services";
import { RootState } from "../../store";

export interface MovieDetailsState {
  imdbId: string;
  isExistedInFavorites: boolean;
  isTestForFavoritesLoading: boolean;
  isPushToFavoritesLoading: boolean;
}

export const movieDetailsInitialState: MovieDetailsState = {
  imdbId: "",
  isExistedInFavorites: false,
  isTestForFavoritesLoading: false,
  isPushToFavoritesLoading: false,
};

export const hasFavoritesMovie = createAsyncThunk<
  boolean,
  void,
  { rejectValue: string; state: RootState }
>("movieDetailsSlice/hasFavoritesMovie", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { uid: userId } = state.user;
  const { imdbId } = state.movieDetails;

  try {
    return isMovieExistsInFavorites({ userId, imdbId });
  } catch (error) {
    return rejectWithValue(getFirebaseErrorMessage(error));
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
    setImdbId: (state, { payload }: PayloadAction<string>) => {
      state.imdbId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hasFavoritesMovie.pending, (state) => {
      state.isTestForFavoritesLoading = true;
    });

    builder.addCase(hasFavoritesMovie.fulfilled, (state, action) => {
      state.isTestForFavoritesLoading = false;
      state.isExistedInFavorites = action.payload;
    });

    builder.addCase(addMovieToFavorites.pending, (state) => {
      state.isPushToFavoritesLoading = true;
    });

    builder.addCase(addMovieToFavorites.fulfilled, (state, action) => {
      state.isPushToFavoritesLoading = false;
      state.isExistedInFavorites = true;
    });
  },
});

export const { setImdbId } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
