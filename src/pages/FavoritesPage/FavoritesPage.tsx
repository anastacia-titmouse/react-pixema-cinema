import { useEffect } from "react";
import { useTypedDispatch, fetchFavoriteMovies, useTypedSelector } from "store";
import { MoviesList } from "components";

export const FavoritesPage = () => {
  const movies = useTypedSelector((state) => state.favorites.movies);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};
