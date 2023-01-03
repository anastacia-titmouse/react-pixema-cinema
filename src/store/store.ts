import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import filterReducer from "./features/filterSlice/filterSlice";
import movieReducer from "./features/movieSlice/movieSlice";
import favoritesReducer from "./features/favoritesSlice/favoritesSlice";
import movieDetailsReducer from "./features/movieDetailsSlice/movieDetailsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    movie: movieReducer,
    favorites: favoritesReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
