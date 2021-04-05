const { default: cakeReducer } = require("./cake/cakeReducer");
const { default: iceReducer } = require("./icecream/iceReducer");

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

export default rootReducer;
