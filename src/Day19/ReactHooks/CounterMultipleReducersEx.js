import React, { useReducer } from "react";

const CounterMultipleReducersEx = () => {
  const initialState = 0;
  //current state and action
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.value;
        break;
      case "decrement":
        return state - action.value;

        break;
      case "reset":
        return initialState;
        break;

      default:
        return state;
        break;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <div>{countTwo}</div>
        <button onClick={() => dispatchTwo({ type: "increment", value: 10 })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 10 })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default CounterMultipleReducersEx;
