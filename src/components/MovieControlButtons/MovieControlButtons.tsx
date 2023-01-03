import { MovieControlButtonsStyled } from "./styles";
import { Button } from "components";
import { BookmarkIcon, LinkIcon } from "assets";

export const MovieControlButtons = ({
  isAddToFavoritesDisabled,
  onAddToFavouriteClick,
  onShareClick,
}: {
  isAddToFavoritesDisabled?: boolean;
  onAddToFavouriteClick?: () => void;
  onShareClick?: () => void;
}) => {
  return (
    <MovieControlButtonsStyled>
      <Button
        disabled={isAddToFavoritesDisabled}
        onClick={() => {
          onAddToFavouriteClick && onAddToFavouriteClick();
        }}
      >
        <BookmarkIcon />
      </Button>
      <Button
        onClick={() => {
          onShareClick && onShareClick();
        }}
      >
        <LinkIcon />
      </Button>
    </MovieControlButtonsStyled>
  );
};
