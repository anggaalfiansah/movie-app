import { combineReducers } from "redux";
import DetailReducer from "./detailReducer";
import MovieReducer from "./movieReducer";
import SearchReducer from "./searchReducer";

const rootReducer = combineReducers({
  movie: MovieReducer,
  search: SearchReducer,
  detail: DetailReducer
});

export default rootReducer;
