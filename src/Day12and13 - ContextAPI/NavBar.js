import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const NavBar = () => {
  const [movies, setMovies] = useContext(MovieContext);
  //const name = useContext(MovieContext);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {/* <h3 style={{ textAlign: "left" }}>{name}</h3> */}

      <h3 style={{ textAlign: "center" }}> Movies : {movies.length}</h3>
    </div>
  );
};

export default NavBar;
