import React from "react";
import { ButtonStyled, IButtonStyledProps } from "./styles";

export type IButtonProps = {
  children: string;
  type?: "button" | "submit" | "reset";
} & IButtonStyledProps;

export const Button = (props: IButtonProps) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};
