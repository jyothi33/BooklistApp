import iceReducer from "./icecream/iceReducer";
import cakeReducer from "./cake/cakeReducer";

import userReducer from "./users/userReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: userReducer,
});

export default rootReducer;
