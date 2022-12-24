import { IMovie } from "types";
import { CardPoster, Title, SubTitle } from "./style";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  return (
    <li key={movie.imdbID}>
      <CardPoster src={movie.poster} alt={movie.title} />
      <Title>
        {movie.title}:{movie.year}
      </Title>
      <SubTitle>{movie.genre}</SubTitle>
    </li>
  );
};
