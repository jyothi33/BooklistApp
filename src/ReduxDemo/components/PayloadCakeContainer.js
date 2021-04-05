import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const PayloadCakeContainer = (props) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h2> Number of Cakes - {props.numOfCakes} </h2>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => props.buyCake(quantity)}>
        Buy {quantity} Cake
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (quantity) => dispatch(buyCake(quantity)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayloadCakeContainer);
