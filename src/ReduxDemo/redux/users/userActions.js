import { FETCH_ERROR, FETCH_SUCCESS, FETCH_USERS } from "./userTypes";
import axios from "axios";
export const fecthUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const fecthSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

export const fecthError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

//create a function for fetching users from web APP_ID
export const fetchUsersFromApi = () => {
  return (dispatch) => {
    dispatch(fecthUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        console.log(users);
        dispatch(fecthSuccess(users));
      })
      .catch((error) => {
        const err = error.message;
        dispatch(fecthError(err));
      });
  };
};

//Invoked by Saga
export const getUsers = (users) => {
  return {
    type: "FETCH_SAGA_USERS",
    payload: users,
  };
};
