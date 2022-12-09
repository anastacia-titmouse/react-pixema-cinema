import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useInput } from "./hooks";
import { OmdbAPI, transformMovies } from "./services";
import { getUser, useAppDispatch } from "./store";
import { setUserName, toggleAuth } from "./store/userSlice/userSlice";
import { IMovie } from "./types";
import { Color } from "./ui";

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
    OmdbAPI.getMoviesBySearch("superman", "movie")
      .then((data) => {
        const transformedMovies = transformMovies(data.Search);
        console.log(transformedMovies);
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
      <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque
        quia reprehenderit officia molestias, dolores excepturi minima adipisci
        quo ullam nisi eos rerum recusandae accusantium iste accusamus
        architecto fugiat alias?
      </Title>
      <ul>
        {movies.map((m) => (
          <li>{m.title}</li>
        ))}
      </ul>
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

const StyledApp = styled.div`
  background: ${Color.Primary_BG};
`;
const Title = styled.h1`
  color: ${Color.Primary_TX};
`;
