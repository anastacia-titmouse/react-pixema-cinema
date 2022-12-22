import { MovieCard } from "components";
import { IMovie } from "types";
import { StyledList } from "./style";

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
