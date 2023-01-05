import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { CardPoster, Title, SubTitle, MovieCardStyled, Text, linkStyle } from "./style";

interface IProps {
  movie: IMovie;
}
export const MovieCard = ({ movie }: IProps) => {
  const { imdbId, poster, title, year } = movie;

  return (
    <Link to={`/${generatePath(ROUTE.MOVIE_DETAILS, { imdbId })}`} style={linkStyle}>
      <MovieCardStyled key={imdbId}>
        <CardPoster src={poster} alt={title} />
        <Text>
          <Title>
            {title}:{year}
          </Title>
          <SubTitle>{year}</SubTitle>
        </Text>
      </MovieCardStyled>
    </Link>
  );
};
