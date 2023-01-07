import { MainTemplate } from "components";
import {
  FavoritesPage,
  HomePage,
  MovieDetailsPage,
  ResetPasswordPage,
  SearchPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "router";
import { AuthTemplate } from "../components/AuthTemplate/AuthTemplate";
import { ProtectedRoute, ProtectFrom } from "./ProtectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route
          path={ROUTE.FAVORITES}
          element={
            <ProtectedRoute protectFrom={ProtectFrom.anon} redirectTo={`${ROUTE.SIGN_IN}`}>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTE.MOVIE_DETAILS} element={<MovieDetailsPage />} />
      </Route>
      <Route element={<AuthTemplate />}>
        <Route
          path={ROUTE.SIGN_IN}
          element={
            <ProtectedRoute protectFrom={ProtectFrom.authorized}>
              <SignInPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE.SIGN_UP}
          element={
            <ProtectedRoute protectFrom={ProtectFrom.authorized}>
              <SignUpPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE.RESET_PASSWORD}
          element={
            <ProtectedRoute protectFrom={ProtectFrom.authorized}>
              <ResetPasswordPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Route>,
  ),
);
