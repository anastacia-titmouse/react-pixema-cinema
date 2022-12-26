import { ChevronRightStyled, UsernameStyled, UserSettingsButtonStyled } from "./styles";
import { InitialsAvatar } from "components";

export const UserSettingsButton = ({
  username,
  onClick,
}: {
  username?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <UserSettingsButtonStyled className={username ? "authorized" : ""} onClick={onClick}>
      <InitialsAvatar username={username} />
      <UsernameStyled>{username ? username : "sign in"}</UsernameStyled>
      <ChevronRightStyled className="chevron" />
    </UserSettingsButtonStyled>
  );
};
