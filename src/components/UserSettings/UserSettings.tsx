import { SignInButton, UserMenu } from "components";
import { useTypedSelector } from "store";
import { UserSettingsStyled } from "./styles";

export const UserSettings = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);

  return (
    <UserSettingsStyled>
      {!isAuth && <SignInButton />}
      {isAuth && <UserMenu />}
    </UserSettingsStyled>
  );
};
