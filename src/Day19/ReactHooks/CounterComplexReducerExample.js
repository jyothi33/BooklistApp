import React, { useReducer } from "react";

const CounterComplexReducerExample = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };
  //current state and action
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };
        break;
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };

        break;
      case "increment5":
        return { ...state, firstCounter: state.firstCounter + action.value };
        break;
      case "decrement5":
        return { ...state, firstCounter: state.firstCounter - action.value };

        break;
      case "increment10":
        return { ...state, secondCounter: state.secondCounter + action.value };
        break;
      case "decrement10":
        return { ...state, secondCounter: state.secondCounter - action.value };

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

  return (
    <div>
      <div>{count.firstCounter}</div>
      <div>{count.secondCounter}</div>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
          Increment5
        </button>
        <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
          Decrement5
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment10", value: 10 })}>
          Increment10
        </button>
        <button onClick={() => dispatch({ type: "decrement10", value: 10 })}>
          Decrement10
        </button>
      </div>
    </div>
  );
};

export default CounterComplexReducerExample;
