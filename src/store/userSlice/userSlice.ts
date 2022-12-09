import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  isAuth: boolean;
}

const initialState: UserState = {
  name: "Ann",
  email: "ggwrgrg",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
  },
});

export default userSlice.reducer;
export const { toggleAuth, setUserName } = userSlice.actions;
