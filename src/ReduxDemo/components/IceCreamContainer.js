import React from "react";
import { connect } from "react-redux";
import { buyIce } from "../redux/icecream/iceActions";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2> Number of Icecreams - {props.numOfIce} </h2>
      <button onClick={props.buyIce}> Buy Icecreams </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIce: state.ice.numOfIce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: () => dispatch(buyIce()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
