import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFullMovieInfo } from "types";
import { getImdbErrorMessage, OmdbAPI, transformFullMovieInfo } from "services";
import { RootState } from "../../store";

interface MovieState {
  movie?: IFullMovieInfo;
  loading: boolean;
  error?: unknown;
}
const initialState: MovieState = {
  loading: false,
  error: undefined,
};

export const fetchMovieById = createAsyncThunk<
  IFullMovieInfo,
  string,
  { rejectValue: string; state: RootState }
>("search/fetchById", async (payload, { rejectWithValue, getState }) => {
  try {
    const response = await OmdbAPI.getMovieById(payload);
    return transformFullMovieInfo(response);
  } catch (error) {
    return rejectWithValue(getImdbErrorMessage(error));
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.loading = true;
      console.log(action.payload);
      state.movie = action.payload;
    });
    builder.addCase(fetchMovieById.pending, (state, action) => {
      state.loading = true;
      state.movie = action.payload;
    });
    builder.addCase(fetchMovieById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default movieSlice.reducer;
