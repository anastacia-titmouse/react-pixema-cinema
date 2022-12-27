import { CloseButtonStyled } from "./styles";
import { TimesIcon } from "assets";

export const CloseButton = ({ onClose }: { onClose?: () => void }) => {
  return (
    <CloseButtonStyled
      onClick={() => {
        onClose && onClose();
      }}
    >
      <TimesIcon />
    </CloseButtonStyled>
  );
};
