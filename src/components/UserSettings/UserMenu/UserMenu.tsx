import { useState } from "react";
import { Button, Initials, Name, UserMenuStyled, ChevronRightStyled, Menu } from "./styles";
import { logoutUser, useTypedDispatch, useTypedSelector } from "../../../store";

const getInitialsFromName = (name: string) => {
  const parts = name.split(" ");
  return parts.map((part) => part[0]);
};

export const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useTypedDispatch();
  const username = useTypedSelector((state) => state.user.name);
  const initials = getInitialsFromName(username);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleEditProfile = () => {
    //TODO
    setOpen(false);
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
    setOpen(false);
  };

  return (
    <UserMenuStyled>
      <Button onClick={handleOpen}>
        <Initials>{initials}</Initials>
        <Name>{username}</Name>
        <ChevronRightStyled />
      </Button>
      {open ? (
        <Menu>
          <li className="edit-profile">
            <button onClick={handleEditProfile}>Edit Profile</button>
          </li>
          <li className="log-out">
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </Menu>
      ) : null}
    </UserMenuStyled>
  );
};
