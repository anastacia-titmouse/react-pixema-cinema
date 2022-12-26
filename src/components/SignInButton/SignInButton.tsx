import { SignInButtonStyled } from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { ChevronRight, UserIcon } from "assets";

export const SignInButton = () => {
  const navigate = useNavigate();

  return (
    <SignInButtonStyled
      onClick={() => {
        navigate(ROUTE.SIGN_IN);
      }}
    >
      <UserIcon /> Sign In <ChevronRight />
    </SignInButtonStyled>
  );
};