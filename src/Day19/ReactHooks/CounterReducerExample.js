import React, { useReducer } from "react";

const CounterReducerExample = () => {
  const initialState = {
    firstCount: 0,
    secondCount: 0,
  };
  //current state and action
  //   const reducer = (state, action) => {
  //     switch (action) {
  //       case "increment":
  //         return state + 1;
  //         break;
  //       case "decrement":
  //         return state - 1;

  //         break;
  //       case "reset":
  //         return initialState;
  //         break;

  //       default:
  //         return state;
  //         break;
  //     }
  //   };
  //   const [count, dispatch] = useReducer(reducer, initialState);

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCount: state.firstCount + action.value };
        break;
      case "decrement":
        return { ...state, firstCount: state.firstCount - action.value };
        break;
      case "increment5":
        return { ...state, secondCount: state.secondCount + action.value };
        break;
      case "decrement5":
        return { ...state, secondCount: state.secondCount - action.value };
        break;
      case "reset":
        return initialState;
        break;

      default:
        state;
        break;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{count.firstCount}</div>
      {/* <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button> */}

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <div>{count.secondCount}</div>
        <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterReducerExample;
