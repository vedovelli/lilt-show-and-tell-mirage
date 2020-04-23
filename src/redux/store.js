import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { middleware as reduxPack } from "redux-pack";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxPack))
);
