import { PixemaIcon, PixemaLightIcon } from "assets";
import { Search, BurgerButton } from "components";
import { UserSettings } from "components";
import { HeaderStyled, LogoStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useTypedSelector } from "store";

export const Header = () => {
  const darkThemeStore: boolean = useTypedSelector((state) => state.user.useDarkTheme);
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <LogoStyled
        onClick={() => {
          navigate(`${ROUTE.HOME}`);
        }}
      >
        {darkThemeStore ? <PixemaIcon /> : <PixemaLightIcon />}
      </LogoStyled>
      <Search />
      <UserSettings />
      <BurgerButton />
    </HeaderStyled>
  );
};
