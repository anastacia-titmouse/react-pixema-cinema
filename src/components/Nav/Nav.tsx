import { HomeIcon, TrendsIcon, FavoritesIcon, SettingsIcon } from "assets";
import { CustomLink, CustomNavLink, Divider, Footer } from "components";
import { ROUTE } from "router";
import { LogOut, NavStyled, User, Username } from "./style";
import { logoutUser, useTypedDispatch, useTypedSelector } from "store";
import { useWindowSize } from "hooks";

export const Nav = () => {
  const isMobileMenuOpen = useTypedSelector((state) => state.mobileMenu.isOpen);
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  const username = useTypedSelector((state) => state.user.name);
  const dispatch = useTypedDispatch();
  const { width } = useWindowSize();

  return (
    <NavStyled className={isMobileMenuOpen ? "is-open" : ""}>
      {isAuth ? (
        <User className={width && width <= 1280 ? "block" : ""}>
          <Username>{username ? username : "sign in"}</Username>
          <LogOut
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            Log out
          </LogOut>
          <Divider />
        </User>
      ) : (
        <User className={width && width <= 1280 ? "block" : ""}>
          <CustomLink className="nav" to={`${ROUTE.SIGN_IN}`}>
            Sign In
          </CustomLink>
          <Divider />
        </User>
      )}

      <CustomNavLink to={ROUTE.HOME}>
        <HomeIcon />
        Home
      </CustomNavLink>
      <CustomNavLink to={ROUTE.TRENDS}>
        <TrendsIcon />
        Trends
      </CustomNavLink>
      <CustomNavLink to={ROUTE.FAVORITES}>
        <FavoritesIcon />
        Favorites
      </CustomNavLink>
      <CustomNavLink to={ROUTE.SETTINGS}>
        <SettingsIcon />
        Settings
      </CustomNavLink>
      <Footer />
    </NavStyled>
  );
};
