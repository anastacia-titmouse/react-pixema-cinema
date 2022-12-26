import { MovieCard } from "components";
import { IMovie } from "types";
import { StyledList } from "./style";

interface IProps {
  movies: IMovie[];
}

export const MoviesList = ({ movies }: IProps) => {
  return (
    <StyledList>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID}></MovieCard>
      ))}
    </StyledList>
  );
};
