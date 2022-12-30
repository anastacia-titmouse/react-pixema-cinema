import { Header, Nav, Filter } from "components";
import { Outlet } from "react-router-dom";
import { ContentWrapper, MainTemplateStyled } from "./style";
import { useTypedSelector } from "store";

export const MainTemplate = () => {
  const isFilterVisible = useTypedSelector((state) => state.filter.isFilterVisible);

  return (
    <MainTemplateStyled>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Nav />
      <Filter isVisible={isFilterVisible} />
    </MainTemplateStyled>
  );
};
