import { MoviesList } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById, RootState } from "store";

export const MovieDetailsPage = () => {
  const { movie, loading } = useSelector((state: RootState) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieById({ "superman" }));
  }, [dispatch]);

  return (
    <div>
      <MoviesList movie={movie} loading={loading} />
    </div>
  );
};
