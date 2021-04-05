import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIce } from "../redux/icecream/iceActions";
const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => {
  const itemState = ownprops.cake ? state.cake.numOfCakes : state.ice.numOfIce;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  const dispatchFunction = ownprops.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIce());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
