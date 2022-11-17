import { put, select, takeLatest } from "redux-saga/effects";

import { REQUEST_SEARCH_MOVIE, REQUEST_SEARCH_MOVIE_MORE, REQUEST_SEARCH_MOVIE_SUCCESS, REQUEST_SEARCH_MOVIE_FAILURE } from "constant/types";
import { URL_FIND_MOVIE_BY_KEYWORD } from "constant/url";
import { ActionDiscoverMovie, ResponseGenerator } from "constant/interface";

import axios from "utils/axios";

function* requestSearchMovie(action: ActionDiscoverMovie) {
  const { keyword, page } = action;
  try {
    const query = keyword ? keyword : "day";
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_FIND_MOVIE_BY_KEYWORD(query) + pageNumber);
    if (movie?.status === 200) {
      yield put({ type: REQUEST_SEARCH_MOVIE_SUCCESS, data: movie.data });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_SEARCH_MOVIE_FAILURE, error: error.message });
  }
}

function* requestSearchMovieMore(action: ActionDiscoverMovie) {
  const { keyword, page } = action;
  try {
    const query = keyword ? keyword : "day";
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_FIND_MOVIE_BY_KEYWORD(query) + pageNumber);
    if (movie?.status === 200) {
      const { movieSearch } = yield select((state: any) => state.search);
      yield put({ type: REQUEST_SEARCH_MOVIE_SUCCESS, data: { ...movie.data, results: movieSearch?.results?.concat(movie.data.results) } });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_SEARCH_MOVIE_FAILURE, error: error.message });
  }
}

function* searchSaga() {
  yield takeLatest(REQUEST_SEARCH_MOVIE, requestSearchMovie);
  yield takeLatest(REQUEST_SEARCH_MOVIE_MORE, requestSearchMovieMore);
}

export default searchSaga;
