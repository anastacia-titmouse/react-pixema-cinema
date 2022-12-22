import { HomeIcon, TrendsIcon, FavoritesIcon, SettingsIcon } from "assets";
import { CustomNavLink } from "components";
import { useEffect, useState } from "react";
import { ROUTE } from "router";
import { Button, NavStyled } from "./style";

export const Nav = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

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
      <Button onClick={handleTheme}>Theme</Button>
    </NavStyled>
  );
};
