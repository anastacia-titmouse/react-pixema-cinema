import { ShowMoreButtonWrapper } from "./styles";
import { Button } from "components";

export const ShowMoreButton = ({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <ShowMoreButtonWrapper>
      <Button
        disabled={disabled}
        onClick={() => {
          onClick && onClick();
        }}
      >
        Show more
      </Button>
    </ShowMoreButtonWrapper>
  );
};
