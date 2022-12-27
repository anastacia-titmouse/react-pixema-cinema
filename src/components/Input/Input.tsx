import { InputHTMLAttributes } from "react";
import { InputStyled } from "./styles";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputStyled {...props} />;
};
