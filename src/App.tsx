import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledApp } from "./appWrapper";
import { MoviesList } from "./components/MoviesList";
import { useInput } from "./hooks";
import { OmdbAPI, transformMovies } from "./services";
import { getUser, useAppDispatch } from "./store";
import { setUserName, toggleAuth } from "./store/userSlice/userSlice";
import { IMovie } from "./types";

export const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { name, email, isAuth } = useSelector(getUser);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const search = useInput();
  const dispatch = useAppDispatch();

  const handleAuth = () => {
    dispatch(toggleAuth());
  };

  const handleName = (event: any) => {
    dispatch(setUserName(event.target.value));
  };

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
      <MoviesList movies={movies} />
      <div>
        <h3>{name}</h3>
        <h4>{email}</h4>
        {isAuth ? <span>Logged</span> : <span>Not logged in</span>}
      </div>
      <input type="text" onClick={handleName} />
      <button onClick={handleTheme}>Theme</button>
      <button onClick={handleAuth}>Toggle Auth</button>
    </StyledApp>
  );
};
