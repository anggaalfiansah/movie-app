import {
  REQUEST_FREE_MOVIE,
  REQUEST_FREE_MOVIE_MORE,
  REQUEST_POPULAR_MOVIE,
  REQUEST_POPULAR_MOVIE_MORE,
  REQUEST_TREND_MOVIE,
  REQUEST_TREND_MOVIE_MORE,
  REQUEST_RESET_ERROR_FREE_MOVIE,
  REQUEST_RESET_ERROR_POPULAR_MOVIE,
  REQUEST_RESET_ERROR_TREND_MOVIE,
} from "constant/types";

export const getPopularMovie = (filter?: string, page?: number) => {
  return { type: REQUEST_POPULAR_MOVIE, filter, page };
};

export const getMorePopularMovie = (filter?: string, page?: number) => {
  return { type: REQUEST_POPULAR_MOVIE_MORE, filter, page };
};

export const resetErrorPopularMovie = () => {
  return { type: REQUEST_RESET_ERROR_POPULAR_MOVIE };
};

export const getFreeMovie = (page?: number) => {
  return { type: REQUEST_FREE_MOVIE, page };
};

export const getMoreFreeMovie = (page?: number) => {
  return { type: REQUEST_FREE_MOVIE_MORE, page };
};

export const resetErrorFreeMovie = () => {
  return { type: REQUEST_RESET_ERROR_FREE_MOVIE };
};

export const getTrendMovie = (filterTime: "week" | "day", page?: number) => {
  return { type: REQUEST_TREND_MOVIE, filterTime, page };
};

export const getMoreTrendMovie = (filterTime: "week" | "day", page?: number) => {
  return { type: REQUEST_TREND_MOVIE_MORE, filterTime, page };
};

export const resetErrorTrendMovie = () => {
  return { type: REQUEST_RESET_ERROR_TREND_MOVIE };
};
