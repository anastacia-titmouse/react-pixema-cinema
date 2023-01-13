import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "types";
import { fetchTrendMovies, getFirebaseErrorMessage, ITrendMovieModel } from "services";
import { RootState } from "store";

export interface TrendsState {
  isLoading: boolean;
  movies: IMovie[];
}

export const trendsInitialState: TrendsState = {
  isLoading: false,
  movies: [],
};

export const fetchTrendsMovies = createAsyncThunk<
  ITrendMovieModel[],
  void,
  { rejectValue: string; state: RootState }
>("trends/fetchTrendsMovies", async (payload, { rejectWithValue, getState }) => {
  try {
    return fetchTrendMovies();
  } catch (error) {
    return rejectWithValue(getFirebaseErrorMessage(error));
  }
});

export const trendsSlice = createSlice({
  name: "trends",
  initialState: trendsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendsMovies.pending, (state) => {
      state.movies = [];
      state.isLoading = true;
    });

    builder.addCase(fetchTrendsMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
  },
});

export default trendsSlice.reducer;
