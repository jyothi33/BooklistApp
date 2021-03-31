import React from "react";

const Button = ({ clickHandler, children }) => {
  console.log("Button Component!!! " + children);
  return <button onClick={clickHandler}>{children}</button>;
};

export default React.memo(Button);
