import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import {
  CardPoster,
  Title,
  SubTitle,
  MovieCardStyled,
  Text,
  linkStyle,
  MovieCardWrapper,
  DeleteButton,
} from "./style";
import { CustomNavLink } from "components";
import { deleteFavoriteMovie, useTypedDispatch } from "store";
import { TimesIcon } from "assets";

interface IProps {
  movie: IMovie;
  showDeleteFromFavorites?: boolean;
}
export const MovieCard = ({ movie, showDeleteFromFavorites = false }: IProps) => {
  const { imdbId, poster, title, year } = movie;
  const dispatch = useTypedDispatch();

  const deleteFavorite = () => {
    dispatch(deleteFavoriteMovie(imdbId));
  };

  return (
    <MovieCardWrapper>
      <CustomNavLink to={`${generatePath(ROUTE.MOVIE_DETAILS, { imdbId })}`} style={linkStyle}>
        <MovieCardStyled key={imdbId}>
          {showDeleteFromFavorites && (
            <DeleteButton
              type="button"
              onClick={(event) => {
                event.preventDefault();
                deleteFavorite();
              }}
            >
              <TimesIcon />
            </DeleteButton>
          )}
          <CardPoster src={poster} alt={title} />
          <Text>
            <Title>
              {title}:{year}
            </Title>
            <SubTitle>{year}</SubTitle>
          </Text>
        </MovieCardStyled>
      </CustomNavLink>
    </MovieCardWrapper>
  );
};
