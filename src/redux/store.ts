import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = process.env.NODE_ENV !== "production" ? composeWithDevTools(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);
