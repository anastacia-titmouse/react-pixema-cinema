import { HomeIcon, TrendsIcon, FavoritesIcon, SettingsIcon } from "assets";
import { CustomNavLink, Footer } from "components";
import { ROUTE } from "router";
import { NavStyled } from "./style";

export const Nav = () => {
  return (
    <NavStyled>
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
