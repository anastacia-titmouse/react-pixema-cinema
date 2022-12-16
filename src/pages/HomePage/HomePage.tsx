import { StyledApp } from "appWrapper";
import { Main, SidebarLeft } from "components";

export const HomePage = () => {
  return (
    <StyledApp>
      <SidebarLeft />
      <Main />
    </StyledApp>
  );
};
