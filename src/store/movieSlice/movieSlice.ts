import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovieInfoAPI } from "types";
import { OmdbAPI } from "services";
import { loading } from "./types";

interface MovieState {
  movie?: IMovieInfoAPI;
  loading: loading;
  error?: unknown;
}
const initialState: MovieState = {
  loading: "succeed",
  error: undefined,
};

export const fetchMovieById = createAsyncThunk("movie/fetchById", async (imdbID: string) => {
  const response = await OmdbAPI.getMovieById(imdbID);
  return response;
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.loading = "succeed";
      state.movie = action.payload;
    });
    builder.addCase(fetchMovieById.pending, (state, action) => {
      state.loading = "pending";
      state.movie = action.payload;
    });
    builder.addCase(fetchMovieById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default movieSlice.reducer;
