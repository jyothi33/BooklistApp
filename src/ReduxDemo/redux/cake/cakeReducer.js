const { BUY_CAKE } = require("./cakeTypes");

const cakeState = {
  numOfCakes: 20,
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

export default cakeReducer;
