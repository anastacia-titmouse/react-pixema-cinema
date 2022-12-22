import { PixemaIcon } from "assets/icons";
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
