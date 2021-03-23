import React, { useContext } from "react";
import { CountContext } from "./ComponentApp";

const ComponentF = () => {
  const countD = useContext(CountContext);

  return (
    <div>
      ComponentF
      <button onClick={() => countD.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countD.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countD.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentF;
