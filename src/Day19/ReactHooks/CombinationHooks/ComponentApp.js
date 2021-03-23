import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentD from "./ComponentD";
import ComponentF from "./ComponentF";
export const CountContext = React.createContext();
const ComponentApp = () => {
  let initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
        break;
      case "decrement":
        return state - 1;
        break;
      case "reset":
        return initialState;
        break;
      default:
        break;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countDispatch: dispatch }}>
      <div>
        Count - {count}
        <ComponentA />
        <ComponentD />
        <ComponentF />
      </div>
    </CountContext.Provider>
  );
};

export default ComponentApp;
