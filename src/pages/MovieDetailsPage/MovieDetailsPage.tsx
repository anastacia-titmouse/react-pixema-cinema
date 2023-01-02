import { useEffect } from "react";
import { fetchMovieById, useTypedDispatch, useTypedSelector } from "store";
import { useParams } from "react-router";
import { SingleMovieView } from "components";

export const MovieDetailsPage = () => {
  const dispatch = useTypedDispatch();

  const { imdbId } = useParams<{ imdbId: string }>();
  const movie = useTypedSelector((state) => state.movie.movie);

  useEffect(() => {
    if (imdbId) {
      dispatch(fetchMovieById(imdbId));
    }
  }, [dispatch, imdbId]);

  if (movie) {
    return <SingleMovieView movie={movie} />;
  } else {
    return null; //TODO not found error
  }
};
