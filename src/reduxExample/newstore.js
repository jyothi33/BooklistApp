import {createStore, applyMiddleware} from 'redux';

import CakeReducer from './redux/Cake/CakeReducer';

import { composeWithDevTools } from "redux-devtools-extension";

import logger from 'redux-logger';
import redux from 'redux-thunk';
import { UserReducer } from './redux/Users/UserReducer';

const store = createStore(UserReducer, composeWithDevTools(applyMiddleware(redux)));

export default store;