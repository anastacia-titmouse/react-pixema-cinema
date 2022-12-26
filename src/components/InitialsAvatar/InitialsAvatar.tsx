import { InitialsAvatarStyled } from "./styles";
import { UserIcon } from "assets";

const getInitialsFromName = (name: string) => {
  const parts = name.split(" ");
  return parts.map((part) => part[0]);
};

export const InitialsAvatar = ({ username }: { username?: string }) => {
  return (
    <InitialsAvatarStyled className="initial-avatar">
      {username && <div>{getInitialsFromName(username)}</div>}
      {!username && <UserIcon />}
    </InitialsAvatarStyled>
  );
};
