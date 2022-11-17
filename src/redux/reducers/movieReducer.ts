import { ResponseDiscoverMovie } from "constant/interface";
import {
  REQUEST_FREE_MOVIE,
  REQUEST_FREE_MOVIE_FAILURE,
  REQUEST_FREE_MOVIE_SUCCESS,
  REQUEST_POPULAR_MOVIE,
  REQUEST_POPULAR_MOVIE_FAILURE,
  REQUEST_POPULAR_MOVIE_SUCCESS,
  REQUEST_RESET_FREE_MOVIE,
  REQUEST_RESET_POPULAR_MOVIE,
  REQUEST_TREND_MOVIE,
  REQUEST_TREND_MOVIE_SUCCESS,
  REQUEST_RESET_TREND_MOVIE,
  REQUEST_TREND_MOVIE_FAILURE,
  REQUEST_RESET_ERROR_FREE_MOVIE,
  REQUEST_RESET_ERROR_POPULAR_MOVIE,
  REQUEST_RESET_ERROR_TREND_MOVIE,
} from "constant/types";

const initialState = {
  popularMovie: null,
  isRequestPopularMovie: false,
  errorRequestPopularMovieMessage: null,
  freeMovie: null,
  isRequestFreeMovie: false,
  errorRequestFreeMovieMessage: null,
  trendMovie: null,
  isRequestTrendMovie: false,
  errorRequestTrendMovieMessage: null,
};

const MovieReducer = (state = initialState, action: { type: string; data: ResponseDiscoverMovie; error: any }) => {
  switch (action.type) {
    case REQUEST_POPULAR_MOVIE:
      return {
        ...state,
        isRequestPopularMovie: true,
      };
    case REQUEST_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        isRequestPopularMovie: false,
        popularMovie: action.data,
      };
    case REQUEST_POPULAR_MOVIE_FAILURE:
      return {
        ...state,
        isRequestPopularMovie: false,
        errorRequestPopularMovieMessage: action.error,
      };
    case REQUEST_RESET_ERROR_POPULAR_MOVIE:
      return {
        ...state,
        errorRequestPopularMovieMessage: null,
      };
    case REQUEST_RESET_POPULAR_MOVIE:
      return {
        ...state,
        popularMovie: null,
        isRequestPopularMovie: false,
        errorRequestPopularMovieMessage: null,
      };

    case REQUEST_FREE_MOVIE:
      return {
        ...state,
        isRequestFreeMovie: true,
      };
    case REQUEST_FREE_MOVIE_SUCCESS:
      return {
        ...state,
        isRequestFreeMovie: false,
        freeMovie: action.data,
      };
    case REQUEST_FREE_MOVIE_FAILURE:
      return {
        ...state,
        isRequestFreeMovie: false,
        errorRequestFreeMovieMessage: action.error,
      };
    case REQUEST_RESET_ERROR_FREE_MOVIE:
      return {
        ...state,
        errorRequestFreeMovieMessage: null,
      };
    case REQUEST_RESET_FREE_MOVIE:
      return {
        ...state,
        freeMovie: null,
        isRequestFreeMovie: false,
        errorRequestFreeMovieMessage: null,
      };

    case REQUEST_TREND_MOVIE:
      return {
        ...state,
        isRequestTrendMovie: true,
      };
    case REQUEST_TREND_MOVIE_SUCCESS:
      return {
        ...state,
        isRequestTrendMovie: false,
        trendMovie: action.data,
      };
    case REQUEST_TREND_MOVIE_FAILURE:
      return {
        ...state,
        isRequestTrendMovie: false,
        errorRequestTrendMovieMessage: action.error,
      };
    case REQUEST_RESET_ERROR_TREND_MOVIE:
      return {
        ...state,
        errorRequestTrendMovieMessage: null,
      };
    case REQUEST_RESET_TREND_MOVIE:
      return {
        ...state,
        trendMovie: null,
        isRequestTrendMovie: false,
        errorRequestTrendMovieMessage: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default MovieReducer;
