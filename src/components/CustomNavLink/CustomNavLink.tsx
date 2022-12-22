import { ReactNode } from "react";
import { useMatch } from "react-router";
import { ROUTE } from "router";
import { NavLinkStyled } from "./style";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomNavLink = ({ children, to }: IProps) => {
  const isActive = useMatch(to);
  return (
    <NavLinkStyled $isActive={isActive} to={to}>
      {children}
    </NavLinkStyled>
  );
};
