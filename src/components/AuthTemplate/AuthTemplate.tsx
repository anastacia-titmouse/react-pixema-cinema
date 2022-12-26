import { FooterAuth, HeaderAuth } from "components";
import { Outlet } from "react-router-dom";
import { AuthTemplateStyled } from "./style";

export const AuthTemplate = () => {
  return (
    <AuthTemplateStyled>
      <HeaderAuth />
      <Outlet />
      <FooterAuth />
    </AuthTemplateStyled>
  );
};
