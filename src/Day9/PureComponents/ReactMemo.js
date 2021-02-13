import React, { memo } from "react";

function ReactMemo({ label }) {
  return (
    <div>
      <h6>{console.log({ label })}</h6>
    </div>
  );
}

//export default ReactMemo;
export default memo(ReactMemo);
