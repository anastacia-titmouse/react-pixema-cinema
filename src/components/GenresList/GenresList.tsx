import { GenresListItem, GenresListStyled } from "./styles";

export const GenresList = ({ genres }: { genres: string[] }) => {
  if (genres.length !== 0) {
    return (
      <GenresListStyled>
        {genres.map((genre) => (
          <GenresListItem key={genre}>{genre}</GenresListItem>
        ))}
      </GenresListStyled>
    );
  } else {
    return null;
  }
};
