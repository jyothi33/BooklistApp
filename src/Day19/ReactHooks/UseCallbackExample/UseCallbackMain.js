import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const UseCallbackMain = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" value={age} />
      <Button clickHandler={incrementAge}> Increment Age </Button>
      <Count text="Salary" value={salary} />
      <Button clickHandler={incrementSalary}> Increment Salary </Button>
    </div>
  );
};

export default UseCallbackMain;
