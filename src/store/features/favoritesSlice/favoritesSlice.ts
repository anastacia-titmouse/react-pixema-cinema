import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "types";
import { fetchFavorites, getImdbErrorMessage, putFavoriteMovie } from "services";
import { RootState } from "../../store";
import { IFavoriteMovie } from "../movieSlice/types";

export interface FavoritesState {
  page: number;
  totalMovies: number | null;
  isLoading: boolean;
  movies: IMovie[];
}

export const favoritesInitialState: FavoritesState = {
  page: 1,
  totalMovies: null,
  isLoading: false,
  movies: [],
};

export const initialLoad = createAsyncThunk<
  IFavoriteMovie[],
  void,
  { rejectValue: string; state: RootState }
>("favorites/initialLoad", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { uid } = state.user;

  try {
    if (uid) {
      return fetchFavorites(uid);
    } else {
      return [];
    }
  } catch (error) {
    return rejectWithValue(getImdbErrorMessage(error));
  }
});

export const addMovieToFavorites = createAsyncThunk<
  void,
  Omit<IFavoriteMovie, "uid">,
  { rejectValue: string; state: RootState }
>("favorites/initialLoad", async (payload, { rejectWithValue, getState }) => {
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

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialLoad.pending, (state) => {
      state.movies = [];
      state.isLoading = true;
    });

    builder.addCase(initialLoad.fulfilled, (state, action) => {
      //TODO loading hadnler
    });
  },
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
