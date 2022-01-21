import React, { useContext } from 'react'
import { MovieContext, MoviesContext, MoviesContextNew } from './MoviesContext'

const MovieNavBar = () => {

    const {userName,movies} = useContext(MoviesContext)

    return (
        <div>
            <h3> Welcome {userName}!</h3>
            <h3> Total Movies :{movies.length}</h3>
        </div>
    )
}

export default MovieNavBar
