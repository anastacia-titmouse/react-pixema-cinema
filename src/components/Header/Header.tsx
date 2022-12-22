import { PixemaIcon } from "assets";
import { Search } from "components";
import { useInput } from "hooks";

export const Header = () => {
  const search = useInput;
  return (
    <header>
      <PixemaIcon />
      <Search {...search} />
    </header>
  );
};
