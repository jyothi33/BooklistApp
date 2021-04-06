import { FETCH_ERROR, FETCH_SUCCESS, FETCH_USERS } from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Reducer Function

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
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
      return state;
      break;
  }
};

export default userReducer;
