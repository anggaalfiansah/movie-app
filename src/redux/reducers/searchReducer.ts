import { ResponseDiscoverMovie } from "constant/interface";
import { REQUEST_SEARCH_MOVIE, REQUEST_SEARCH_MOVIE_FAILURE, REQUEST_SEARCH_MOVIE_SUCCESS, REQUEST_RESET_SEARCH_MOVIE, REQUEST_RESET_ERROR_SEARCH_MOVIE } from "constant/types";

const initialState = {
  movieSearch: null,
  isRequestMovieSearch: false,
  errorRequestMovieSearchMessage: null,
};

const SearchReducer = (state = initialState, action: { type: string; data: ResponseDiscoverMovie; error: any }) => {
  switch (action.type) {
    case REQUEST_SEARCH_MOVIE:
      return {
        ...state,
        isRequestMovieSearch: true,
      };
    case REQUEST_SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isRequestMovieSearch: false,
        movieSearch: action.data,
      };
    case REQUEST_SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        isRequestMovieSearch: false,
        errorRequestMovieSearchMessage: action.error,
      };
    case REQUEST_RESET_ERROR_SEARCH_MOVIE:
      return {
        ...state,
        errorRequestMovieSearchMessage: null,
      };
    case REQUEST_RESET_SEARCH_MOVIE:
      return {
        ...state,
        movieSearch: null,
        isRequestMovieSearch: false,
        errorRequestMovieSearchMessage: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default SearchReducer;
