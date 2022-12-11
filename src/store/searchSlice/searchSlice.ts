import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  keyword: string;
}

const initialState: SearchState = {
  keyword: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.keyword += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setKeyword } = searchSlice.actions;

export default searchSlice.reducer;
