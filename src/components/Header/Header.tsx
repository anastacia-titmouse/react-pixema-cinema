import { PixemaIcon } from "assets";
import { Search, BurgerButton } from "components";
import { UserSettings } from "components/UserSettings/UserSettings";
import { HeaderStyled, LogoStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <LogoStyled
        onClick={() => {
          navigate(`${ROUTE.HOME}`);
        }}
      >
        <PixemaIcon />
      </LogoStyled>
      <Search />
      <UserSettings />
      <BurgerButton />
    </HeaderStyled>
  );
};
