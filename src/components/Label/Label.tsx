import { LabelHTMLAttributes } from "react";
import { LabelStyled } from "./styles";

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <LabelStyled {...props} />;
};
