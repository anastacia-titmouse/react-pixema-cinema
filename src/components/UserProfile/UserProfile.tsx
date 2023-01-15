import { logoutUser, useTypedDispatch, useTypedSelector } from "store";
import { UserSettingButton, UserSettingButtonGroup, UserSettingsStyled } from "./styles";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { UserSettingsButton } from "components";
import { Popover } from "@mui/material";

export const UserProfile = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  const username = useTypedSelector((state) => state.user.name);
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const displayedUsername = isAuth && username ? username : "";

  const userSettingClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isAuth) {
        setAnchorEl(event.currentTarget);
      } else {
        navigate(`${ROUTE.SIGN_IN}`);
      }
    },
    [isAuth, navigate],
  );

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);

  return (
    <UserSettingsStyled>
      <UserSettingsButton username={displayedUsername} onClick={userSettingClickHandler} />
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ mt: "24px" }}
      >
        <UserSettingButtonGroup>
          <UserSettingButton
            onClick={() => {
              navigate(`${ROUTE.SETTINGS}`);
              handlePopoverClose();
            }}
          >
            Edit Profile
          </UserSettingButton>
          <UserSettingButton
            onClick={() => {
              dispatch(logoutUser());
              handlePopoverClose();
            }}
          >
            Log Out
          </UserSettingButton>
        </UserSettingButtonGroup>
      </Popover>
    </UserSettingsStyled>
  );
};
