import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne(counterOne + 1);
  const incrementTwo = () => setCounterTwo(counterTwo + 1);

  // const isEven = useMemo(() => {
  //   for (let i = 0; i < 30000; i++) {}
  //   return counterOne % 2 === 0;
  // }, [counterOne]);

  const isEven = useMemo(() => {
    for (let i = 0; i < 30000; i++) {
      console.log(i);
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementOne}> Counter One {counterOne} </button>
      <br />
      {isEven ? "EVEN" : "ODD"}
      <br />
      <button onClick={incrementTwo}> Counter Two {counterTwo} </button>
    </div>
  );
};

export default UseMemoExample;
