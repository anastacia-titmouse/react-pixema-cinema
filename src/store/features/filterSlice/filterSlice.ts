import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie, IResponseDto, MovieTypes } from "types";
import { getImdbErrorMessage, OmdbAPI, transformShortMovieInfo } from "services";
import { RootState } from "../../store";

export interface FilterState {
  keyword: string;
  yearOfRelease: string | null;
  type: MovieTypes | null;
  isFilterVisible: boolean;
  page: number;
  totalMovies: number | null;
  isLoading: boolean;
  movies: IMovie[];
}

export const filterInitialState: FilterState = {
  keyword: "",
  yearOfRelease: null,
  type: null,
  isFilterVisible: false,
  page: 1,
  totalMovies: null,
  isLoading: false,
  movies: [],
};

export const applyFilter = createAsyncThunk<
  IResponseDto,
  void,
  { rejectValue: string; state: RootState }
>("search/applyFilter", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { keyword, type, yearOfRelease } = state.filter;

  try {
    return OmdbAPI.getMoviesBySearch({ keyword, yearOfRelease, type });
  } catch (error) {
    return rejectWithValue(getImdbErrorMessage(error));
  }
});

export const loadMoreMovies = createAsyncThunk<
  IResponseDto,
  void,
  { rejectValue: string; state: RootState }
>("search/loadMoreMovies", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { keyword, type, yearOfRelease, page } = state.filter;

  try {
    return OmdbAPI.getMoviesBySearch({ keyword, yearOfRelease, type, page: page + 1 });
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
      const { yearOfRelease, type } = filterInitialState;

      return {
        ...state,
        yearOfRelease,
        type,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(applyFilter.pending, (state) => {
      state.movies = [];
      state.isLoading = true;
    });

    builder.addCase(applyFilter.fulfilled, (state, action) => {
      if (action.payload.Response === "True") {
        const { Search, totalResults } = action.payload;
        state.movies = transformShortMovieInfo(Search);
        state.totalMovies = Number(totalResults);
      } else {
        state.movies = [];
        state.totalMovies = 0;
      }

      state.page = 1;
      state.isLoading = false;
    });

    builder.addCase(loadMoreMovies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadMoreMovies.fulfilled, (state, action) => {
      if (action.payload.Response === "True") {
        const { Search, totalResults } = action.payload;
        state.movies = [...state.movies, ...transformShortMovieInfo(Search)];
        state.totalMovies = Number(totalResults);
        state.page = state.page + 1;
      }

      state.isLoading = false;
    });
  },
});

export const { setKeyword, setFilterVisibility, setYearOfRelease, cleanFilter, setType } =
  filterSlice.actions;

export default filterSlice.reducer;
