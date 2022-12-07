import { useEffect, useState } from "react";
import styled from "styled-components";
import { useInput } from "./hooks";
import { OmdbAPI, transformMovies } from "./services";
import { IMovie } from "./types";
import { Color } from "./ui";

export const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const search = useInput();

  useEffect(() => {
    OmdbAPI.getMoviesBySearch("superman", "movie")
      .then((data) => {
        console.log(data);
        return transformMovies(data.Search);
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
        {/* {movies.map((m) => (
          <li>
            {m.t}
            {m.i}
          </li>
        ))} */}
      </ul>
      <button onClick={handleTheme}>Theme</button>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background: ${Color.Primary_BG};
`;
const Title = styled.h1`
  color: ${Color.Primary_TX};
`;
