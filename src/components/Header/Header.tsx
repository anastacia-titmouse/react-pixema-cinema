import { PixemaIcon, PixemaLightIcon } from "assets";
import { Search, BurgerButton } from "components";
import { UserSettings } from "components";
import { HeaderStyled, LogoStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useTypedSelector } from "store";
import { useWindowSize } from "hooks";

export const Header = () => {
  const darkThemeStore: boolean = useTypedSelector((state) => state.user.useDarkTheme);
  const isMobileMenuOpen = useTypedSelector((state) => state.mobileMenu.isOpen);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  return (
    <HeaderStyled className={isMobileMenuOpen ? "is-open" : ""}>
      <LogoStyled
        className={isMobileMenuOpen ? "is-open" : ""}
        onClick={() => {
          navigate(`${ROUTE.HOME}`);
        }}
      >
        {darkThemeStore ? <PixemaIcon /> : <PixemaLightIcon />}
      </LogoStyled>
      <Search />
      {width && width <= 1280 ? <BurgerButton /> : <UserSettings />}
    </HeaderStyled>
  );
};
