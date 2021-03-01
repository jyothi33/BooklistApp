import React, { useRef } from "react";
import FancyButton from "./FancyButton";

const ParentButton = () => {
  const ref = useRef(null);

  function clickHandler(number) {
    console.log(number);
    console.log(ref);
  }

  return (
    <FancyButton ref={ref} clickHandler={clickHandler}>
      Click me!
    </FancyButton>
  );
};

export default ParentButton;
