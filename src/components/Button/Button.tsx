import { ButtonStyled } from "./styles";
import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};
