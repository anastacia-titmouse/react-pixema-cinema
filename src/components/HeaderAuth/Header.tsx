import { PixemaIcon } from "assets";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { HeaderStyled } from "./style";

export const HeaderAuth = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <PixemaIcon
        onClick={() => {
          navigate(`${ROUTE.HOME}`);
        }}
      />
    </HeaderStyled>
  );
};
