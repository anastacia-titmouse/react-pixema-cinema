import { UserSettingsStyled } from "./styles";
import { useTypedSelector } from "../../store";
import { SignInButton } from "./SignInButton/SignInButton";
import { UserMenu } from "./UserMenu/UserMenu";
export const UserSettings = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);

  return (
    <UserSettingsStyled>
      {!isAuth && <SignInButton />}
      {isAuth && <UserMenu />}
    </UserSettingsStyled>
  );
};
