import { createStore, combineReducers } from "redux";

const appReducers = combineReducers({});

export const store = createStore(appReducers);

console.log(store);
