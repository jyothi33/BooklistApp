import React, { useState } from "react";
Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br></br>
      <br></br>
    </div>
  );
};

export default Counter;
