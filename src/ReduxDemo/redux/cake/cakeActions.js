const { BUY_CAKE } = require("./cakeTypes");

function buyCake(quantity = 1) {
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
}

export { buyCake };
