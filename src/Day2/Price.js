import React from "react";
import "../css/style.css";
function Price({ price, pcolor }) {
  return <p style={pcolor}>{price}</p>;
}

export default Price;
