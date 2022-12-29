import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import searchReducer from "./searchSlice/searchSlice";
import movieReducer from "./movieSlice/movieSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
