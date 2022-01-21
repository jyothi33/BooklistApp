import React, { useState, useEffect } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  document.title = `You clicked ${count}`;

  // useEffect(() => {
  //   console.log(count);
  //   //console.log(count1);
  // }, [count1]);

  useEffect(() => {
    console.log(count1)
    
  },[count1])

  return (
    <>
      <button onClick={() => setCount(count + 1)}> Click </button>
      <h1> You clicked {count} times.</h1>
      <button onClick={() => setCount1(count1 + 1)}>click 1</button>
    </>
  );
};

export default BasicUseEffect;
