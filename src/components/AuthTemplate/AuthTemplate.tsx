import { Outlet } from "react-router-dom";
import { AuthTemplateStyled } from "./style";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const AuthTemplate = () => {
  return (
    <AuthTemplateStyled>
      <Header />
      <Outlet />
      <Footer />
    </AuthTemplateStyled>
  );
};
