import { REQUEST_RESET_ERROR_SEARCH_MOVIE, REQUEST_SEARCH_MOVIE, REQUEST_SEARCH_MOVIE_MORE } from "constant/types";

export const getMovieByKeyword = (keyword: string, page?: number) => {
  return { type: REQUEST_SEARCH_MOVIE, keyword, page };
};

export const getMoreMovieByKeyword = (keyword: string, page: number) => {
  return { type: REQUEST_SEARCH_MOVIE_MORE, keyword, page };
};

export const resetErrorSearchMovie = () => {
  return { type: REQUEST_RESET_ERROR_SEARCH_MOVIE };
};
