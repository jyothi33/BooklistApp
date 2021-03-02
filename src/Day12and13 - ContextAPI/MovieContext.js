import React, { createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const movies = [
    {
      name: "Jurassic Park",
      price: 10,
      year: 1999,
    },
    {
      name: "Inception",
      price: 10,
      year: 2019,
    },
    {
      name: "Titanic",
      price: 10,
      year: 2005,
    },
    {
      name: "Godzilla",
      price: 10,
      year: 2010,
    },
  ];
  return (
    <MovieContext.Provider value="Hello Jyothi!">
      {props.children}
    </MovieContext.Provider>
  );
};
