import { createStore, combineReducers } from "redux";
import { searchRobots } from "./reducers";

const appReducers = combineReducers({
  searchRobots,
});

export const store = createStore(appReducers);

console.log(store);
