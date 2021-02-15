import React, { useState, useEffect } from "react";

const UseEffectHookCounter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  const clickHandler1 = () => {
    setCount1(count1 + 1);
  };

  //document.title = `You clicked ${count} times!`; // Bad Side effect!
  //   useEffect(() => {
  //     // Runs after EVERY rendering
  //   });
  // useEffect(() => {
  //   // Runs ONCE after initial rendering
  // }, []);
  // useEffect(() => {
  //   // Runs ONCE after initial rendering
  //   // and after every rendering ONLY IF `prop` or `state` changes
  // }, [prop, state]);

  useEffect(() => {
    // Good!
    console.log(` Im from count ${count}`);
    console.log(` Im from count1 ${count1}`);
    document.title = `You clicked ${count} times!`; // Side-effect!
  }, [count1]);
  return (
    <>
      <button onClick={clickHandler}> Click </button>
      <h1>You clicked {count} times.</h1>
      <button onClick={clickHandler1}> Click 1</button>
    </>
  );
};

export default UseEffectHookCounter;
