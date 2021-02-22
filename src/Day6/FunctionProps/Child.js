import React from "react";

const Child = ({ greeting }) => {
  return (
    <div>
      <button onClick={() => greeting(6)}>Child component</button>
    </div>
  );
};

export default Child;
