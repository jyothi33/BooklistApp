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
      price: 15,
      year: 2005,
    },
    {
      name: "Godzilla",
      price: 17,
      year: 2010,
    },
  ]);

  const [user, setUser] = useState("Jyothi");
  const providerValue = {
    user,
    movies,
    setMovies,
  };

  return (
    <MovieContext.Provider value={providerValue}>
      {/* <MovieContext.Provider value={[movies, setMovies]}> */}
      {props.children}
    </MovieContext.Provider>
  );
};
