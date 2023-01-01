import { loadMoreMovies, useTypedDispatch, useTypedSelector } from "store";
import { MoviesList, ShowMoreButton } from "components";

export const SearchPage = () => {
  const dispatch = useTypedDispatch();
  const movies = useTypedSelector((state) => state.filter.movies);
  const isLoading = useTypedSelector((state) => state.filter.isLoading);
  const moviesTotal = useTypedSelector((state) => state.filter.totalMovies);

  const isShowMoreButtonVisible = moviesTotal && movies.length < moviesTotal;

  return (
    <div>
      <MoviesList movies={movies} />
      {isShowMoreButtonVisible && (
        <ShowMoreButton
          disabled={isLoading}
          onClick={() => {
            dispatch(loadMoreMovies());
          }}
        />
      )}
    </div>
  );
};
