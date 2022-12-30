import { useTypedSelector } from "store";
import { MoviesList } from "components";

export const SearchPage = () => {
  const movies = useTypedSelector((state) => state.filter.movies);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};
