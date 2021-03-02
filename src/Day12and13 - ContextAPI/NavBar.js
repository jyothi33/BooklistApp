import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const NavBar = () => {
  const name = useContext(MovieContext);
  console.log(name);
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h3 style={{ textAlign: "left" }}>{name}</h3>

      <h3 style={{ textAlign: "right" }}> Movies : 10</h3>
    </div>
  );
};

export default NavBar;
