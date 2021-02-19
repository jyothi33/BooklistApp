import React from "react";

const PrintCount = ({ passCount, title }) => {
  return (
    <h1>
      You clicked {passCount} times. Title is {title}
    </h1>
  );
};

export default PrintCount;
