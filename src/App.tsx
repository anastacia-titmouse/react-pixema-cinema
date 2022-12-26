import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { useTypedSelector } from "store";

export const App = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  if (isAuth === undefined) {
    return null;
  } else {
    return <RouterProvider router={router} />;
  }
};
