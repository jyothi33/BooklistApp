import React, { useState } from "react";
import { useSpring } from "react-spring";
import { animated } from "react-spring";

const ToggleAnimation = () => {
  const [toggle, setToggle] = useState(false);

  const animateName = useSpring({
    textAlign: "center",
    color: toggle ? "red" : "green",
    fontSize: toggle ? "2rem" : "20em",
  });

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <animated.h1 style={animateName}>Jyothi</animated.h1>
    </div>
  );
};

export default ToggleAnimation;
