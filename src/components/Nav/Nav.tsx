import { useEffect, useState } from "react";
import { Button, NavLink, NavStyled } from "./style";
import { ReactComponent as HomeIcon } from "../../assets/icons/home_icon.svg";
import { ReactComponent as TrendsIcon } from "../../assets/icons/trends_icon.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/icons/favorites_icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings_icon.svg";

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
      <NavLink href="">
        <HomeIcon />
        Home
      </NavLink>
      <NavLink href="">
        <TrendsIcon />
        Trends
      </NavLink>
      <NavLink href="">
        <FavoritesIcon />
        Favorites
      </NavLink>
      <NavLink href="">
        <SettingsIcon />
        Settings
      </NavLink>
      <Button onClick={handleTheme}>Theme</Button>
    </NavStyled>
  );
};
