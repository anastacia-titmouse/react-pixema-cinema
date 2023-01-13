import { useEffect } from "react";
import { useTypedDispatch, fetchFavoriteMovies, useTypedSelector } from "store";
import { EmptyResult, MoviesList } from "components";

export const FavoritesPage = () => {
  const movies = useTypedSelector((state) => state.favorites.movies);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [dispatch]);

  if (!movies.length) {
    return <EmptyResult />;
  }

  return (
    <div className="favorites">
      <MoviesList movies={movies} showDeleteFromFavorites={true} />
    </div>
  );
};
