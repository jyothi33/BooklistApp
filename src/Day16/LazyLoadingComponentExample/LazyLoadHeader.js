import React from "react";

const LazyLoadHeader = () => {
  for (let index = 0; index < 2000000000; index++) {}
  return <h1>I am LAZYYYYY</h1>;
};

export default LazyLoadHeader;
