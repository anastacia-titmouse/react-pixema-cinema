import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../store";
import { ROUTE } from "./routes";

export enum ProtectFrom {
  anon,
  authorized,
}

export const ProtectedRoute = ({
  children,
  protectFrom,
  redirectTo = ROUTE.HOME,
}: {
  children: JSX.Element;
  protectFrom: ProtectFrom;
  redirectTo?: string;
}) => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);

  const doesChildRender = isAuth
    ? protectFrom !== ProtectFrom.authorized
    : protectFrom !== ProtectFrom.anon;

  return doesChildRender ? children : <Navigate to={redirectTo} replace />;
};
