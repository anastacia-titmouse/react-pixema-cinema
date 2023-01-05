import { MoviesList } from "components";
import { useEffect } from "react";
import { MainStyled } from "./style";
import { fetchTrendsMovies, useTypedDispatch, useTypedSelector } from "store";

export const Main = () => {
  const dispatch = useTypedDispatch();
  const movies = useTypedSelector((state) => state.trends.movies);

  useEffect(() => {
    dispatch(fetchTrendsMovies());
  }, []);

  return (
    <MainStyled>
      <MoviesList movies={movies} />
    </MainStyled>
  );
};
