import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useSelector, useDispatch } from "react-redux";

const HooksCakeContainer = () => {
  //React redux version 7.1 and above
  const cakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Number of Cakes - {cakes} </h2>
      <button onClick={() => dispatch(buyCake())}> Buy Cake </button>
    </div>
  );
};

export default HooksCakeContainer;
