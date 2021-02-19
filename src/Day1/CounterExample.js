import React, { useState } from "react";
import { PI, numb } from "../Day4/MathEx";
import PrintCount from "./PrintCount";

const CounterExample = () => {
  const [count, setCount] = useState(0);

  const showCount = () => setCount(count + 1);

  let title = "Click Example";
  return (
    <div>
      <PrintCount passCount={count} title={title} />
      <br />
      <button onClick={showCount}>Click</button>
      <br />
      {PI}
      <br />
      {numb}
      <br />
    </div>
  );
};

export default CounterExample;
