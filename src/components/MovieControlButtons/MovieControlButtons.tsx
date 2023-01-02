import { MovieControlButtonsStyled } from "./styles";
import { Button } from "components";
import { BookmarkIcon, LinkIcon } from "assets";

export const MovieControlButtons = ({
  onAddToFavouriteClick,
  onShareClick,
}: {
  onAddToFavouriteClick?: () => void;
  onShareClick?: () => void;
}) => {
  return (
    <MovieControlButtonsStyled>
      <Button
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
