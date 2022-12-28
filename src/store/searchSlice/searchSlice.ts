import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  keyword: string;
  isFilterVisible: boolean;
}

const initialState: SearchState = {
  keyword: "",
  isFilterVisible: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword += action.payload;
    },
    setFilterVisibility: (state, action: PayloadAction<boolean>) => {
      state.isFilterVisible = action.payload;
    },
  },
});

export const { setKeyword, setFilterVisibility } = searchSlice.actions;

export default searchSlice.reducer;
