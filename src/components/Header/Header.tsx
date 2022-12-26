import { PixemaIcon } from "assets";
import { Search } from "components";
import { UserSettings } from "components/UserSettings/UserSettings";
import { useInput } from "hooks";
import { HeaderStyled, LogoStyled } from "./style";

export const Header = () => {
  const search = useInput;
  return (
    <HeaderStyled>
      <LogoStyled>
        <PixemaIcon />
      </LogoStyled>
      <Search {...search} />
      <UserSettings />
    </HeaderStyled>
  );
};
