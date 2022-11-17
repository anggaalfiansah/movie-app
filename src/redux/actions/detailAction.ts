import { REQUEST_RESET_ERROR_DETAIL_MOVIE, REQUEST_DETAIL_MOVIE } from "constant/types";

export const getDetailMovieById = (movieId: string | number) => {
  return { type: REQUEST_DETAIL_MOVIE, movieId };
};

export const resetErrorDetailMovie = () => {
  return { type: REQUEST_RESET_ERROR_DETAIL_MOVIE };
};
