import { LinkStyled } from "./styles";
import { LinkProps } from "react-router-dom";

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  return (
    <LinkStyled {...props} to={to}>
      {children}
    </LinkStyled>
  );
};
