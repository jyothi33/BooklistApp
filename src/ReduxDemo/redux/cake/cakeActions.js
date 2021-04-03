const { BUY_CAKE } = require("./cakeTypes");

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

export { buyCake };
