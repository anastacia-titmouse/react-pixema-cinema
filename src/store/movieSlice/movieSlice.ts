import { createSlice } from "@reduxjs/toolkit";
import { IMovieInfoAPI } from "types";

interface MovieState {
  movie?: IMovieInfoAPI;
  loading: boolean;
}
const initialState: MovieState = {
  loading: true,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovie: (state, action),
  },
});
