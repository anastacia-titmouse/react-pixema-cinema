import { StyledApp } from "./appWrapper";
import { Main, SidebarLeft } from "./components/index";

export const App = () => {
  return (
    <StyledApp>
      <SidebarLeft />
      <Main />
    </StyledApp>
  );
};
