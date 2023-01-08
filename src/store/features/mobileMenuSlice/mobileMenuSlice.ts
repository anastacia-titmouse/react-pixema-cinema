import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IMobileMenuState {
  isOpen: boolean;
}

export const mobileMenuInitialState: IMobileMenuState = {
  isOpen: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: mobileMenuInitialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export default mobileMenuSlice.reducer;
export const { setIsOpen } = mobileMenuSlice.actions;
