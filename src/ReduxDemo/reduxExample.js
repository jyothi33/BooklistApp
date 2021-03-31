console.clear();
console.log("Redux Example");

const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";

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

const cakeState = {
  numOfCakes: 20,
};

const iceState = {
  numOfIce: 30,
};

const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

const iceReducer = (state = iceState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numOfIce: state.numOfIce - 1,
      };
      break;

    default:
      return state;
      break;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

const store = createStore(rootReducer);
console.log(store);
console.log(" Initial state - ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State - ", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIce());
store.dispatch(buyIce());
unsubscribe();
