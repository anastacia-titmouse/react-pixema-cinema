import { RecommendationsStyled, Header, RecommendationsButtonGroup, Content } from "./styles";
import { Button, MovieCard } from "components";
import { IMovie } from "types";
import { useEffect, useState } from "react";

const hardcodedRecommendationMovies: IMovie[] = [
  {
    imdbId: "tt0145487",
    title: "Spider-Man",
    year: "2002",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZ" +
      "GE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  },
  {
    imdbId: "tt0371746",
    title: "Iron Man",
    year: "2008",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcw" +
      "MTU0NTIzMw@@._V1_SX300.jpg",
  },
  {
    imdbId: "tt1300854",
    title: "Iron Man 3",
    year: "2013",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwM" +
      "jQ4MjcxOQ@@._V1_SX300.jpg",
  },
  {
    imdbId: "tt1228705",
    title: "Iron Man 2",
    year: "2010",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwN" +
      "Tg3NzAzMw@@._V1_SX300.jpg",
  },
  {
    imdbId: "tt3748528",
    title: "Rogue One: A Star Wars Story",
    year: "2016",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgw" +
      "Nzg3OTAzMDI@._V1_SX300.jpg",
  },
  {
    imdbId: "tt2527338",
    title: "Star Wars: Episode IX - The Rise of Skywalker",
    year: "2019",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQt" +
      "ZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
  },
  {
    imdbId: "tt1655389",
    title: "Blonde",
    year: "2022",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDk2YTA1MGYtMGNjMi00YTJlLWI1YjIt" +
      "MjBjOGJlZGIwZmYzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_SX300.jpg",
  },
  {
    imdbId: "tt4620502",
    title: "Vikings: The Viking Sagas",
    year: "2014",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWQ5N2Q2MWUtZTlmMC00YjI5LTgyOWQt" +
      "NTA4NmY5MGQzM2EwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTUwMTIyODg@._V1_SX300.jpg",
  },
];

/**
 * Stub. API does not support recommendations for movie.
 */
export const Recommendations = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    if (page === 1) {
      setMovies([...hardcodedRecommendationMovies.slice(0, 4)]);
    } else {
      setMovies([...hardcodedRecommendationMovies.slice(4)]);
    }
  }, [page]);

  return (
    <RecommendationsStyled>
      <Header>
        <h2>Recommendations</h2>
        <RecommendationsButtonGroup>
          <Button
            className="transparent"
            disabled={page === 1}
            onClick={() => {
              setPage(1);
            }}
          >
            &larr;
          </Button>
          <Button
            className="transparent"
            disabled={page === 2}
            onClick={() => {
              setPage(2);
            }}
          >
            &rarr;
          </Button>
        </RecommendationsButtonGroup>
      </Header>
      <Content>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))}
      </Content>
    </RecommendationsStyled>
  );
};
