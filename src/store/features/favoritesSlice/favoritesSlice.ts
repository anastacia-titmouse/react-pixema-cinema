import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "types";
import { fetchFavorites, getFirebaseErrorMessage, IFavoriteMovieModel } from "services";
import { RootState } from "../../store";

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
  },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
