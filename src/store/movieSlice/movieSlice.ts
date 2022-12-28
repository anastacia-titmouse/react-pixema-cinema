import { createSlice } from "@reduxjs/toolkit";
import { IMovieInfoAPI } from "types";

interface MovieState {
  movie?: IMovieInfoAPI;
  loading: boolean;
  error?: string;
}
const initialState: MovieState = {
  loading: true,
  error: undefined,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovie: (state, action),
  },
});
