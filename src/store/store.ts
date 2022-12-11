import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import searchReducer from "./searchSlice/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
