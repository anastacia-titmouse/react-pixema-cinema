import { MoviesList } from "components";
import { useEffect, useState } from "react";
import { IMovie } from "types";
import { MainStyled } from "./style";

export const Main = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  // useEffect(() => {
  //   OmdbAPI.getMoviesBySearch({
  //     keyword: "superman",
  //   })
  //     .then((moviesList) => {
  //       const transformedMovies = transformMovies(moviesList);
  //       return transformedMovies;
  //     })
  //     .then(setMovies);
  // }, []);

  return (
    <MainStyled>
      <MoviesList movies={movies} />
    </MainStyled>
  );
};
