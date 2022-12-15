import { useEffect, useState } from "react";
import { useInput } from "../../hooks";
import { OmdbAPI, transformMovies } from "../../services";
import { useAppDispatch } from "../../store";
import { IMovie } from "../../types";
import { MoviesList } from "../MoviesList/MoviesList";
import { Search } from "../Search/Search";
import { MainStyled } from "./style";

export const Main = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const dispatch = useAppDispatch();
  const search = useInput;

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
      <Search {...search} />
      <MoviesList movies={movies} />
    </MainStyled>
  );
};
