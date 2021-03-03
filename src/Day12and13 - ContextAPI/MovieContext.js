import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Jurassic Park",
      price: 10,
      year: 1999,
    },
    {
      name: "Inception",
      price: 12,
      year: 2019,
    },
    {
      name: "Titanic",
      price: 16,
      year: 2005,
    },
    {
      name: "Godzilla",
      price: 19,
      year: 2010,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {/* <MovieContext.Provider value="Jyothi"> */}
      {props.children}
    </MovieContext.Provider>
  );
};
