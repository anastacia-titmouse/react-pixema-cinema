import { ButtonStyled } from "./styles";
import { ReactNode } from "react";

export enum ButtonType {
  Primary,
  Secondary,
}

export const Button = ({
  type = ButtonType.Secondary,
  children,
  onClick,
}: {
  type?: ButtonType;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <ButtonStyled className={type === ButtonType.Primary ? "primary" : ""} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
