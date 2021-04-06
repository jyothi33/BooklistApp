import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";

import rootSaga from "./redux/sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
