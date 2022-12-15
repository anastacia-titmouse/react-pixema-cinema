import { useEffect, useState } from "react";
import { Button, NavLink, NavStyled } from "./style";

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
      <NavLink href="">Home</NavLink>
      <NavLink href="">Trends</NavLink>
      <NavLink href="">Favorites</NavLink>
      <NavLink href="">Settings</NavLink>
      <Button onClick={handleTheme}>Theme</Button>
    </NavStyled>
  );
};
