import React, { useRef } from "react";
import FancyButton from "./FancyButton";

const ParentButton = () => {
  const ref = useRef(null);
  return <FancyButton ref={ref}>Click me!</FancyButton>;
};

export default ParentButton;
