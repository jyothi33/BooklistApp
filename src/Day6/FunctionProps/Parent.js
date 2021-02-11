import React from "react";
import Child from "./Child";

const Parent = () => {
  function Greeting(number) {
    return alert(`You passed ${number}`);
  }

  return (
    <div>
      <Child greeting={Greeting} />
    </div>
  );
};

export default Parent;
