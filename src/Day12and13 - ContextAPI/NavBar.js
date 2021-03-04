import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const NavBar = () => {
  //const { user, movies } = useContext(MovieContext);
  const { movies, user } = useContext(MovieContext);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h3 style={{ textAlign: "left" }}>{user}</h3>

      <h3 style={{ textAlign: "center" }}> Movies : {movies.length}</h3>
    </div>
  );
};

export default NavBar;
