import { IMovie } from "../../types";
import { MovieCard } from "../index";
import { StyledList } from "./styles";

interface IProps {
  movies: IMovie[];
}

export const MoviesList = ({ movies }: IProps) => {
  return (
    <StyledList>
      {movies.map(({ imdbID, title, poster, genre, year }) => (
        <MovieCard
          key={imdbID}
          id={imdbID}
          title={title}
          img={poster}
          genre={genre}
          year={year}
        ></MovieCard>
      ))}
    </StyledList>
  );
};
