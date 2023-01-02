import { useEffect } from "react";
import { useTypedDispatch, initialLoad } from "store";

export const FavoritesPage = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(initialLoad());
  }, []);

  return <div>Favorites</div>;
};
