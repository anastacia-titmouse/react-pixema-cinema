import { HomeIcon, TrendsIcon, FavoritesIcon, SettingsIcon } from "assets";
import { CustomNavLink, Footer } from "components";
import { ROUTE } from "router";
import { NavStyled } from "./style";
import { useTypedSelector } from "store";

export const Nav = () => {
  const isMobileMenuOpen = useTypedSelector((state) => state.mobileMenu.isOpen);

  return (
    <NavStyled className={isMobileMenuOpen ? "is-open" : ""}>
      <CustomNavLink to={ROUTE.HOME}>
        <HomeIcon />
        Home
      </CustomNavLink>
      <CustomNavLink to={ROUTE.TRENDS}>
        <TrendsIcon />
        Trends
      </CustomNavLink>
      <CustomNavLink to={ROUTE.FAVORITES}>
        <FavoritesIcon />
        Favorites
      </CustomNavLink>
      <CustomNavLink to={ROUTE.SETTINGS}>
        <SettingsIcon />
        Settings
      </CustomNavLink>
      <Footer />
    </NavStyled>
  );
};
