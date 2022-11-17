import { put, select, takeLatest } from "redux-saga/effects";

import {
  REQUEST_FREE_MOVIE,
  REQUEST_FREE_MOVIE_FAILURE,
  REQUEST_FREE_MOVIE_MORE,
  REQUEST_FREE_MOVIE_SUCCESS,
  REQUEST_POPULAR_MOVIE,
  REQUEST_POPULAR_MOVIE_FAILURE,
  REQUEST_POPULAR_MOVIE_MORE,
  REQUEST_POPULAR_MOVIE_SUCCESS,
  REQUEST_TREND_MOVIE,
  REQUEST_TREND_MOVIE_FAILURE,
  REQUEST_TREND_MOVIE_MORE,
  REQUEST_TREND_MOVIE_SUCCESS,
} from "constant/types";
import {
  URL_DISCOVER_MOVIE,
  SCOPE_DISCOVER_MOVIE_POPULAR,
  SCOPE_DISCOVER_MOVIE_BY_TYPE_STREAM,
  SCOPE_DISCOVER_MOVIE_BY_TYPE_RENT,
  SCOPE_DISCOVER_MOVIE_BY_TYPE_THEATER,
  SCOPE_DISCOVER_MOVIE_FREE,
  URL_GET_TRENDING_MOVIE,
} from "constant/url";
import { ActionDiscoverMovie, ResponseGenerator } from "constant/interface";

import axios from "utils/axios";

function* requestPopularMovie(action: ActionDiscoverMovie) {
  const { filter, page } = action;
  try {
    const scope = () => {
      switch (filter) {
        case "rent":
          return SCOPE_DISCOVER_MOVIE_BY_TYPE_RENT;
        case "theater":
          return SCOPE_DISCOVER_MOVIE_BY_TYPE_THEATER;
        case "stream":
        default:
          return SCOPE_DISCOVER_MOVIE_BY_TYPE_STREAM;
      }
    };
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_DISCOVER_MOVIE + scope() + pageNumber + SCOPE_DISCOVER_MOVIE_POPULAR);
    if (movie?.status === 200) {
      yield put({ type: REQUEST_POPULAR_MOVIE_SUCCESS, data: movie.data });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_POPULAR_MOVIE_FAILURE, error: error.message });
  }
}

function* requestPopularMovieMore(action: ActionDiscoverMovie) {
  const { filter, page } = action;
  try {
    const scope = () => {
      switch (filter) {
        case "rent":
          return SCOPE_DISCOVER_MOVIE_BY_TYPE_RENT;
        case "theater":
          return SCOPE_DISCOVER_MOVIE_BY_TYPE_THEATER;
        case "stream":
        default:
          return SCOPE_DISCOVER_MOVIE_BY_TYPE_STREAM;
      }
    };
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_DISCOVER_MOVIE + scope() + SCOPE_DISCOVER_MOVIE_POPULAR + pageNumber);
    if (movie?.status === 200) {
      const { popularMovie } = yield select((state: any) => state.movie);
      yield put({ type: REQUEST_POPULAR_MOVIE_SUCCESS, data: { ...movie.data, results: popularMovie?.results?.concat(movie.data.results) } });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_POPULAR_MOVIE_FAILURE, error: error.message });
  }
}

function* requestFreeMovie(action: ActionDiscoverMovie) {
  const { page } = action;
  try {
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_DISCOVER_MOVIE + SCOPE_DISCOVER_MOVIE_FREE + pageNumber);
    if (movie?.status === 200) {
      yield put({ type: REQUEST_FREE_MOVIE_SUCCESS, data: movie.data });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_FREE_MOVIE_FAILURE, error: error.message });
  }
}

function* requestFreeMovieMore(action: ActionDiscoverMovie) {
  const { page } = action;
  try {
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_DISCOVER_MOVIE + SCOPE_DISCOVER_MOVIE_FREE + pageNumber);
    if (movie?.status === 200) {
      const { freeMovie } = yield select((state: any) => state.movie);
      yield put({ type: REQUEST_FREE_MOVIE_SUCCESS, data: { ...movie.data, results: freeMovie?.results?.concat(movie.data.results) } });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_FREE_MOVIE_FAILURE, error: error.message });
  }
}

function* requestTrendMovie(action: ActionDiscoverMovie) {
  const { filterTime, page } = action;
  try {
    const time = filterTime ? filterTime : "day";
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_GET_TRENDING_MOVIE(time) + pageNumber);
    if (movie?.status === 200) {
      yield put({ type: REQUEST_TREND_MOVIE_SUCCESS, data: movie.data });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_TREND_MOVIE_FAILURE, error: error.message });
  }
}

function* requestTrendMovieMore(action: ActionDiscoverMovie) {
  const { filterTime, page } = action;
  try {
    const time = filterTime ? filterTime : "day";
    const pageNumber = `&page=${page ? page : 1}`;
    const movie: ResponseGenerator = yield axios.get(URL_GET_TRENDING_MOVIE(time) + pageNumber);
    if (movie?.status === 200) {
      const { trendMovie } = yield select((state: any) => state.movie);
      yield put({ type: REQUEST_TREND_MOVIE_SUCCESS, data: { ...movie.data, results: trendMovie?.results?.concat(movie.data.results) } });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_TREND_MOVIE_FAILURE, error: error.message });
  }
}

function* movieSaga() {
  yield takeLatest(REQUEST_POPULAR_MOVIE, requestPopularMovie);
  yield takeLatest(REQUEST_POPULAR_MOVIE_MORE, requestPopularMovieMore);
  yield takeLatest(REQUEST_FREE_MOVIE, requestFreeMovie);
  yield takeLatest(REQUEST_FREE_MOVIE_MORE, requestFreeMovieMore);
  yield takeLatest(REQUEST_TREND_MOVIE, requestTrendMovie);
  yield takeLatest(REQUEST_TREND_MOVIE_MORE, requestTrendMovieMore);
}

export default movieSaga;
