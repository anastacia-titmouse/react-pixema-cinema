import { Header, SidebarLeft } from "components";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return <div>
    <Header/>
    <Outlet/>
    <SidebarLeft />
  </div>;
};
