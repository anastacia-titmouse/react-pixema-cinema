import { CloseButtonStyled } from "./styles";
import { TimesIcon } from "assets";

export const CloseButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <CloseButtonStyled
      onClick={() => {
        onClick && onClick();
      }}
    >
      <TimesIcon />
    </CloseButtonStyled>
  );
};
