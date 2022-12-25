import { MainTemplate } from "components";
import {
  HomePage,
  FavoritesPage,
  TrendsPage,
  PasswordPage,
  SearchPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  MovieCardPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "router";
import { AuthTemplate } from "../components/AuthTemplate/AuthTemplate";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.PASSWORD} element={<PasswordPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTE.MOVIE_CARD} element={<MovieCardPage />} />
      </Route>
      <Route element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      </Route>
    </Route>,
  ),
);
