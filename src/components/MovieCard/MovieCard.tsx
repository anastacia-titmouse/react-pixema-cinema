import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { CardPoster, Title, SubTitle, MovieCardStyled, Text } from "./style";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  return (
    <Link to={generatePath(ROUTE.MOVIE_DETAILS, { name: movie.imdbID })}>
      <MovieCardStyled key={movie.imdbID}>
        <CardPoster src={movie.poster} alt={movie.title} />
        <Text>
          <Title>
            {movie.title}:{movie.year}
          </Title>
          <SubTitle>{movie.genre}</SubTitle>
        </Text>
      </MovieCardStyled>
    </Link>
  );
};
