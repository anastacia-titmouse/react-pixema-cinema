import { PixemaIcon } from "assets";
import { Search, BurgerButton } from "components";
import { UserSettings } from "components/UserSettings/UserSettings";
import { HeaderStyled, LogoStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <PixemaIcon />
      </LogoStyled>
      <Search />
      <UserSettings />
      <BurgerButton />
    </HeaderStyled>
  );
};
