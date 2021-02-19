import React from "react";
import PrintCount from "./PrintCount";

const First = () => (
  <div>
    My First React Example
    <PrintCount passCount="4" title="From first component" />
  </div>
);

export default First;
