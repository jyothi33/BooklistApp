console.log("redux demo");
console.clear();

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const reduxlogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxlogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";

const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 20,
};

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIce() {
  return {
    type: BUY_ICE,
  };
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

//const store = createStore(reducer);

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log(store);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(
    " CAKES: " +
      store.getState().cake.numOfCakes +
      " ICE-CREAMS: " +
      store.getState().ice.numOfIcecreams
  );
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());
store.dispatch(buyIce());
store.dispatch(buyIce());

unsubscribe();
