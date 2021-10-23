import { createStore, combineReducers, applyMiddleware } from "redux";
import { searchRobots } from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

const appReducers = combineReducers({
  searchRobots,
});

export const store = createStore(
  appReducers,
  applyMiddleware(thunkMiddleware, logger)
);
