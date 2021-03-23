import React, { useContext } from "react";
import { CountContext } from "./ComponentApp";

const ComponentA = () => {
  const countD = useContext(CountContext);

  return (
    <div>
      ComponentA
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

export default ComponentA;
