import { ButtonStyled } from "./styles";
import { ReactNode } from "react";

export enum ButtonType {
  Primary,
  Secondary,
}

export const Button = ({
  type = ButtonType.Secondary,
  disabled,
  children,
  onClick,
}: {
  type?: ButtonType;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <ButtonStyled
      className={type === ButtonType.Primary ? "primary" : ""}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};
