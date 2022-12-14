import { useEffect, useState } from "react";
import { StyledApp } from "./appWrapper";
import { MoviesList } from "./components/index";
import { Search } from "./components/index";
import { useInput } from "./hooks";
import { OmdbAPI, transformMovies } from "./services";
import { useAppDispatch } from "./store";
import { IMovie } from "./types";

export const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
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

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <StyledApp>
      <Search {...search} />
      <MoviesList movies={movies} />
      <button onClick={handleTheme}>Theme</button>
    </StyledApp>
  );
};
