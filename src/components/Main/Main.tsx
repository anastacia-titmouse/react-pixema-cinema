import { MoviesList } from "components";
import { useEffect, useState } from "react";
import { OmdbAPI, transformMovies } from "services";
import { useAppDispatch } from "store";
import { IMovie } from "types";
import { MainStyled } from "./style";

export const Main = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const dispatch = useAppDispatch();
 

  useEffect(() => {
    OmdbAPI.getMoviesBySearch("superman")
      .then((moviesList) => {
        const transformedMovies = transformMovies(moviesList);
        return transformedMovies;
      })
      .then(setMovies);
  }, []);
  return (
    <MainStyled>
      <MoviesList movies={movies} />
    </MainStyled>
  );
};
