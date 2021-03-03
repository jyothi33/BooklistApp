import React from "react";
import Movie from "./Movie";
import { MovieProvider } from "./MovieContext";
import NavBar from "./NavBar";

const MovieList = () => {
  return (
    <div>
      <MovieProvider>
        <NavBar />
        <Movie />
      </MovieProvider>
    </div>
  );
};

export default MovieList;
