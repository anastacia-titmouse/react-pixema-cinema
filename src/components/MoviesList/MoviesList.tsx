import { MovieCard } from "components";
import { IMovie } from "types";
import { StyledList } from "./style";

interface IProps {
  movies: IMovie[];
  showDeleteFromFavorites?: boolean;
}

export const MoviesList = ({ movies, showDeleteFromFavorites = false }: IProps) => {
  return (
    <StyledList>
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbId}
          showDeleteFromFavorites={showDeleteFromFavorites}
        ></MovieCard>
      ))}
    </StyledList>
  );
};
