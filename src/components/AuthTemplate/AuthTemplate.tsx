import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
import { AuthTemplateStyled } from "./style";

export const AuthTemplate = () => {
  return (
    <AuthTemplateStyled>
      <Header />
      <Outlet />
      <Footer />
    </AuthTemplateStyled>
  );
};
