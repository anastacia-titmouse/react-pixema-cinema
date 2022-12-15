import { Nav } from "../Nav/Nav";
import { SidebarStyled, SubTitle } from "./style";
import { ReactComponent as PixemaIcon } from "../../assets/icons/pixema.svg";

export const SidebarLeft = () => {
  return (
    <SidebarStyled>
      <PixemaIcon />
      <Nav />
      <SubTitle>© All Rights Reserved</SubTitle>
    </SidebarStyled>
  );
};
