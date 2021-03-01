import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button
    ref={ref}
    className="FancyButton"
    onClick={() => props.clickHandler(3)}
  >
    {props.children}
  </button>
));

export default FancyButton;
