import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOT_SUCCESS,
} from "./constant";

export const setSearchField = (text) => {
  console.log(text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const requestRobots = (dispatch) => async () => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: REQUEST_ROBOT_FAILED, payload: error });
    });
};
