import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCountryModels,
  fetchGenreModels,
  getFirebaseErrorMessage,
  ICountryModel,
  IGenreModel,
} from "firebaseApi";

export enum SortVariant {
  rating,
  year,
}

export interface FilterState {
  keyword: string;
  sortVariant: SortVariant;

  yearFrom: number | null;
  yearTo: number | null;

  ratingFrom: number | null;
  ratingTo: number | null;

  genres: IGenreModel[];
  isGenresLoading: boolean;
  selectedGenres: IGenreModel[];

  countries: ICountryModel[];
  isCountriesLoading: boolean;
  selectedCountry: ICountryModel | null;

  isFilterVisible: boolean;
}

export const filterInitialState: FilterState = {
  keyword: "",
  sortVariant: SortVariant.year,
  yearFrom: null,
  yearTo: null,
  ratingFrom: null,
  ratingTo: null,
  genres: [],
  isGenresLoading: false,
  selectedGenres: [],
  countries: [],
  isCountriesLoading: false,
  selectedCountry: null,
  isFilterVisible: false,
};

export const fetchGenres = createAsyncThunk<IGenreModel[], void, { rejectValue: string }>(
  "search/fetchGenres",
  async (payload, { rejectWithValue }) => {
    try {
      return fetchGenreModels();
    } catch (error) {
      return rejectWithValue(getFirebaseErrorMessage(error));
    }
  },
);

export const fetchCountries = createAsyncThunk<ICountryModel[], void, { rejectValue: string }>(
  "search/fetchCountries",
  async (payload, { rejectWithValue }) => {
    try {
      return fetchCountryModels();
    } catch (error) {
      return rejectWithValue(getFirebaseErrorMessage(error));
    }
  },
);

export const filterSlice = createSlice({
  name: "search",
  initialState: filterInitialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword += action.payload;
    },

    setSortVariant: (state, action: PayloadAction<SortVariant>) => {
      state.sortVariant = action.payload;
    },

    setYearFrom: (state, action: PayloadAction<number | string>) => {
      state.yearFrom = action.payload ? Number(action.payload) : null;
    },

    setYearTo: (state, action: PayloadAction<number | string>) => {
      state.yearTo = action.payload ? Number(action.payload) : null;
    },

    setRatingFrom: (state, action: PayloadAction<number | string>) => {
      state.ratingFrom = action.payload ? Number(action.payload) : null;
    },

    setRatingTo: (state, action: PayloadAction<number | string>) => {
      state.ratingTo = action.payload ? Number(action.payload) : null;
    },

    setFilterVisibility: (state, action: PayloadAction<boolean>) => {
      state.isFilterVisible = action.payload;
    },

    setSelectedGenreIds: (state, action: PayloadAction<IGenreModel[]>) => {
      state.selectedGenres = action.payload;
    },

    setSelectedCountry: (state, action: PayloadAction<ICountryModel | null>) => {
      state.selectedCountry = action.payload;
    },

    cleanFilter: (state) => {
      const {
        sortVariant,
        yearFrom,
        yearTo,
        ratingFrom,
        ratingTo,
        selectedGenres,
        selectedCountry,
      } = filterInitialState;

      return {
        ...state,
        sortVariant,
        yearFrom,
        yearTo,
        ratingFrom,
        ratingTo,
        selectedGenres,
        selectedCountry,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.isGenresLoading = true;
    });

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.isGenresLoading = false;
    });

    builder.addCase(fetchCountries.pending, (state) => {
      state.isCountriesLoading = true;
    });

    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.isCountriesLoading = false;
    });
  },
});

export const {
  setKeyword,
  setFilterVisibility,
  setSelectedGenreIds,
  setSelectedCountry,
  setSortVariant,
  setYearFrom,
  setYearTo,
  setRatingFrom,
  setRatingTo,
  cleanFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
