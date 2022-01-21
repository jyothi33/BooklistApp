
import { createContext, useState } from "react";

export const MoviesContext = createContext();


export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([ 
        {
            name: "Jurassic Park",
            price:100,
            yesr:1997
        },
        {
            name: "Titanic",
            price:200,
            yesr:2010
        },
        {
            name: "SuperMan",
            price:150,
            yesr:2015
        }
]);

  const [userName, setUserName] = useState("Jack");


  const providerValue = {
    movies, 
    setMovies,
    userName
  }

  return (
      <MoviesContext.Provider value={providerValue}>
          {props.children}
      </MoviesContext.Provider>
  )

}