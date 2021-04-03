const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

//State
const initialState = {
  loading: true,
  users: [],
  error: "",
};

//Action creators

const FETCH_USERS = "FETCH_USERS";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const fecthUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

const fecthSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

const fecthError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

//Reducer Function

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: false,
      };
      break;

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
      break;
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
      break;

    default:
      break;
  }
};

//create a function for fetching users from web APP_ID
function fetchUsersFromApi() {
  return function (dispatch) {
    dispatch(fecthUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        console.log(users);
        dispatch(fecthSuccess(users));
      })
      .catch((error) => {
        const err = error.message;
        console.log(err);
        dispatch(fecthError(err));
      });
  };
}

//Create Store
const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchUsersFromApi());
