import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice/userSlice";
import filterReducer from "./features/filterSlice/filterSlice";
import favoritesReducer from "./features/favoritesSlice/favoritesSlice";
import movieDetailsReducer from "./features/movieDetailsSlice/movieDetailsSlice";
import trendsReducer from "./features/trendsSlice/trendsSlice";
import mobileMenuReducer from "./features/mobileMenuSlice/mobileMenuSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
    movieDetails: movieDetailsReducer,
    trends: trendsReducer,
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
