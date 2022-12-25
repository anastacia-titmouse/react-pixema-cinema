import { IMovie } from "types";
import { CardPoster, Title, SubTitle, MovieCardStyled, Text } from "./style";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  return (
    <MovieCardStyled key={movie.imdbID}>
      <CardPoster src={movie.poster} alt={movie.title} />
      <Text>
        <Title>
          {movie.title}:{movie.year}
        </Title>
        <SubTitle>{movie.genre}</SubTitle>
      </Text>
    </MovieCardStyled>
  );
};
