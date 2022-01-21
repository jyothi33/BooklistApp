import React, { useContext, useState } from 'react'
import {  MovieContext, MoviesContext, MoviesContextNew } from './MoviesContext';

const MoviesFormComponent = () => {

    const [movieName, setMovieName] = useState("");
    const [moviePrice, setMoviePrice] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    const {movies, setMovies} = useContext(MoviesContext);

    const submitHandler = (e) => {
        e.preventDefault();

        setMovies( (previousState) => [
            ...previousState,
            {
                movieName,
                moviePrice,
                releaseDate
            }
        ]    
        );

        setMovieName("");
        setMoviePrice("");
        setReleaseDate("");
    }

    return (
        <div>
            <form>
                <h6>Enter the list of movies</h6>
                <input type="text" value={movieName} onChange={ (e) => setMovieName(e.target.value)}></input>
                <input type="text" value={moviePrice} onChange={ (e) => setMoviePrice(e.target.value)}></input>
                <input type="text" value={releaseDate} onChange={ (e) => setReleaseDate(e.target.value)}></input>
                <button type="submit" onClick={submitHandler}>Add Movies</button>
            </form>
            <table>
  <tr>
    <th>Movie Name</th>
    <th>Movie Price</th>
    <th>Release Date</th>
  </tr>
  {
                movies.map( (movie, index) => {
                    return (
                        <tr key={index}>
    <td>{movie.name}</td>
    <td>{movie.price}</td>
    <td>{movie.yesr}</td>
  </tr>
                    )
                })
            }
  
 
  
</table>            
        </div>
    )
}

export default MoviesFormComponent
