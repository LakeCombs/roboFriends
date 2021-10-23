import { setSearchField } from "./action";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOT_SUCCESS,
} from "./constant";

const initialStateSearch = {
  searchField: {},
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};
export const searchRobots = (state = initialStateSearch, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};

export const requestRobots = (state = initialStateRobots, action) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };

    case REQUEST_ROBOT_SUCCESS:
      return { ...state, robot: action.payload, isPending: false };

    case REQUEST_ROBOT_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };

    default:
      return state;
  }
};
