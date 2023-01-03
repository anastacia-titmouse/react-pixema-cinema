import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { useTypedSelector } from "store";
import { useEffect } from "react";

export const App = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  const useDarkTheme = useTypedSelector((state) => state.user.useDarkTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", useDarkTheme ? "dark" : "light");
  }, [useDarkTheme]);

  if (isAuth === undefined) {
    return null;
  } else {
    return <RouterProvider router={router} />;
  }
};
