import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const Movie = () => {
  //const name = useContext(MovieContext);
  const { movies, setMovies } = useContext(MovieContext);

  const [movieName, setMovieName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      {
        name: movieName,
        price: price,
        year: year,
      },
    ]);
    setMovieName("");
    setPrice("");
    setYear("");
    console.log(movies);
  };

  return (
    <div style={{ textAlign: "center" }}>
      Enter the movie to be added :
      <form action="">
        <input
          type="text"
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <br />
        <br />
        <button onClick={submitHandler}> Add Movie</button>
        <br />
        <br />
      </form>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Year</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr key={index}>
                <td>
                  <h3>{movie.name}</h3>
                </td>
                <td>
                  <h3>{movie.price}</h3>
                </td>
                <td>
                  <h3>{movie.year}</h3>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Movie;
