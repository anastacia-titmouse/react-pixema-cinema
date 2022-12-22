import { Header, SidebarLeft } from "components";
import { Outlet } from "react-router-dom";
import { MainTemplateStyled } from "./style";

export const MainTemplate = () => {
  return (
    <MainTemplateStyled>
      <Header />
      <Outlet />
      <SidebarLeft />
    </MainTemplateStyled>
  );
};
