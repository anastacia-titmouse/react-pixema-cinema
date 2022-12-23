import { PixemaIcon } from "assets";
import { Search } from "components";
import { useInput } from "hooks";
import { HeaderStyled } from "./style";

export const Header = () => {
  const search = useInput;
  return (
    <HeaderStyled>
      <PixemaIcon />
      <Search {...search} />
    </HeaderStyled>
  );
};
