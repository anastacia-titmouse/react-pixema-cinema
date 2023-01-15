import { useEffect } from "react";
import { useTypedDispatch, fetchFavoriteMovies, useTypedSelector } from "store";
import { EmptyResult, MoviesList } from "components";
import { FavoritesPageStyled } from "./styles";

export const FavoritesPage = () => {
  const movies = useTypedSelector((state) => state.favorites.movies);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [dispatch]);

  return (
    <FavoritesPageStyled className="favorites">
      {!movies.length ? (
        <EmptyResult />
      ) : (
        <MoviesList movies={movies} showDeleteFromFavorites={true} />
      )}
    </FavoritesPageStyled>
  );
};
