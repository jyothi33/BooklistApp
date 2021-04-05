const { BUY_ICE } = require("./iceTypes");

const iceState = {
  numOfIce: 30,
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

export default iceReducer;
