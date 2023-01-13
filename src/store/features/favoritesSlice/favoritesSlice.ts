import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "types";
import {
  deleteFavorite,
  fetchFavorites,
  getFirebaseErrorMessage,
  IFavoriteMovieModel,
} from "services";
import { RootState } from "store";

export interface FavoritesState {
  isLoading: boolean;
  movies: IMovie[];
}

export const favoritesInitialState: FavoritesState = {
  isLoading: false,
  movies: [],
};

export const fetchFavoriteMovies = createAsyncThunk<
  IFavoriteMovieModel[],
  void,
  { rejectValue: string; state: RootState }
>("favorites/fetchFavoriteMovies", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { uid } = state.user;
  try {
    return fetchFavorites(uid);
  } catch (error) {
    return rejectWithValue(getFirebaseErrorMessage(error));
  }
});

export const deleteFavoriteMovie = createAsyncThunk<
  string,
  string,
  { rejectValue: string; state: RootState }
>("favorites/delete", async (imdbId, { rejectWithValue, getState }) => {
  const state = getState();
  //state.user.uid === null is unreachable for favorites page
  const uid = state.user.uid as string;

  try {
    await deleteFavorite(imdbId, uid);
    return imdbId;
  } catch (error) {
    return rejectWithValue(getFirebaseErrorMessage(error));
  }
});

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteMovies.pending, (state) => {
      state.movies = [];
      state.isLoading = true;
    });

    builder.addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });

    builder.addCase(fetchFavoriteMovies.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(deleteFavoriteMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteFavoriteMovie.fulfilled, (state, action) => {
      state.movies = state.movies.filter((movie) => {
        return movie.imdbId !== action.payload;
      });
      state.isLoading = false;
    });
    builder.addCase(deleteFavoriteMovie.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default favoritesSlice.reducer;
