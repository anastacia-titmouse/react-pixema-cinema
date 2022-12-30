import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie, MovieTypes } from "types";
import { getImdbErrorMessage, OmdbAPI, transformMovies } from "services";
import { RootState } from "../../store";

export interface FilterState {
  keyword: string;
  yearOfRelease: string | null;
  type: MovieTypes | null;
  isFilterVisible: boolean;
  page: number;
  isLoading: boolean;
  movies: IMovie[];
}

export const filterInitialState: FilterState = {
  keyword: "",
  yearOfRelease: null,
  type: null,
  isFilterVisible: false,
  page: 1,
  isLoading: false,
  movies: [],
};

export const applyFilter = createAsyncThunk<
  IMovie[],
  void,
  { rejectValue: string; state: RootState }
>("search/fetchMovies", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { keyword, page, type, yearOfRelease } = state.filter;

  try {
    const apiMovieList = await OmdbAPI.getMoviesBySearch({ keyword, yearOfRelease, type });
    return transformMovies(apiMovieList);
  } catch (error) {
    return rejectWithValue(getImdbErrorMessage(error));
  }
});

export const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },

    setYearOfRelease: (state, action: PayloadAction<string | null>) => {
      state.yearOfRelease = action.payload;
    },

    setType: (state, action: PayloadAction<MovieTypes | null>) => {
      state.type = action.payload;
    },

    setFilterVisibility: (state, action: PayloadAction<boolean>) => {
      state.isFilterVisible = action.payload;
    },

    cleanFilter: (state) => {
      const { keyword, yearOfRelease, type } = filterInitialState;

      return {
        ...state,
        keyword,
        yearOfRelease,
        type,
      };
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(applyFilter.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(applyFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
  },
});

export const { setKeyword, setFilterVisibility, setYearOfRelease, cleanFilter, setType, setPage } =
  filterSlice.actions;

export default filterSlice.reducer;
