import { put, takeLatest } from "redux-saga/effects";

import { REQUEST_DETAIL_MOVIE, REQUEST_DETAIL_MOVIE_SUCCESS, REQUEST_DETAIL_MOVIE_FAILURE } from "constant/types";
import { URL_GET_MOVIE_DETAIL_BY_ID } from "constant/url";
import { ActionDiscoverMovie, ResponseGenerator } from "constant/interface";

import axios from "utils/axios";

function* requestDetailMovie(action: ActionDiscoverMovie) {
  const { movieId } = action;
  try {
    const id = movieId ? movieId : "";
    const movie: ResponseGenerator = yield axios.get(URL_GET_MOVIE_DETAIL_BY_ID(id));
    if (movie?.status === 200) {
      yield put({ type: REQUEST_DETAIL_MOVIE_SUCCESS, data: movie.data });
    }
  } catch (error: any) {
    yield put({ type: REQUEST_DETAIL_MOVIE_FAILURE, error: error.message });
  }
}

function* detailSaga() {
  yield takeLatest(REQUEST_DETAIL_MOVIE, requestDetailMovie);
}

export default detailSaga;
