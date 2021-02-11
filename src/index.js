import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Test from "./Test";

//ReactDOM.render(<App />, document.getElementById('root'));

const inner = [
  React.createElement("p", {}, "My First React Code"),
  React.createElement("h1", {}, "My Second React Code"),
  React.createElement("h1", {}, "My Third React Code"),
];

ReactDOM.render(
  //React.createElement("div", null, inner),
  //   <div>
  //     <h1>MyFirst Jsx</h1>
  //     <h1>MySecond Jsx</h1>
  //     <h1>MyThird Jsx</h1>
  //   </div>,
  <Test />,
  document.getElementById("root")
);
