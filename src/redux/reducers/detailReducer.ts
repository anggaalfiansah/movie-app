import { ResponseDiscoverMovie } from "constant/interface";
import { REQUEST_DETAIL_MOVIE, REQUEST_DETAIL_MOVIE_FAILURE, REQUEST_DETAIL_MOVIE_SUCCESS, REQUEST_RESET_DETAIL_MOVIE, REQUEST_RESET_ERROR_DETAIL_MOVIE } from "constant/types";

const initialState = {
  movieDetail: null,
  isRequestMovieDetail: false,
  errorRequestMovieDetailMessage: null,
};

const DetailReducer = (state = initialState, action: { type: string; data: ResponseDiscoverMovie; error: any }) => {
  switch (action.type) {
    case REQUEST_DETAIL_MOVIE:
      return {
        ...state,
        isRequestMovieDetail: true,
      };
    case REQUEST_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        isRequestMovieDetail: false,
        movieDetail: action.data,
      };
    case REQUEST_DETAIL_MOVIE_FAILURE:
      return {
        ...state,
        isRequestMovieDetail: false,
        errorRequestMovieDetailMessage: action.error,
      };
    case REQUEST_RESET_ERROR_DETAIL_MOVIE:
      return {
        ...state,
        errorRequestMovieDetailMessage: null,
      };
    case REQUEST_RESET_DETAIL_MOVIE:
      return {
        ...state,
        movieDetail: null,
        isRequestMovieDetail: false,
        errorRequestMovieDetailMessage: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default DetailReducer;
