import { useEffect } from "react";
import { fetchMovieById, resetMovieDetails, useTypedDispatch, useTypedSelector } from "store";
import { useParams } from "react-router";
import { SingleMovieView } from "components";

export const MovieDetailsPage = () => {
  const dispatch = useTypedDispatch();

  const { imdbId } = useParams<{ imdbId: string }>();
  const movie = useTypedSelector((state) => state.movieDetails.movie);

  useEffect(() => {
    dispatch(resetMovieDetails());
  }, [dispatch]);

  useEffect(() => {
    if (imdbId) {
      dispatch(fetchMovieById(imdbId));
    }
  }, [imdbId, dispatch]);

  if (movie) {
    return <SingleMovieView movie={movie} />;
  } else {
    return null;
  }
};
