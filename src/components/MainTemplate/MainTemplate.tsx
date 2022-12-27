import { Header, Nav, Filter } from "components";
import { Outlet } from "react-router-dom";
import { ContentWrapper, MainTemplateStyled } from "./style";

export const MainTemplate = () => {
  return (
    <MainTemplateStyled>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Nav />
      <Filter />
    </MainTemplateStyled>
  );
};
