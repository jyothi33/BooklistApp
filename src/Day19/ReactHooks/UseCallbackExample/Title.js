import React from "react";

const Title = () => {
  console.log("Title component!!!");
  return <div>Title Component</div>;
};

export default React.memo(Title);
