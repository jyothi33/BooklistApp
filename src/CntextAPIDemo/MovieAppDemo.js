import React from 'react'
import MovieNavBar from './MovieNavBar'
import { MovieProvider, MoviesProviderNew } from './MoviesContext'
import MoviesFormComponent from './MoviesFormComponent'
import TestComp from './TestComp'

const MovieAppDemo = () => {
    return (
        <div>
                       

            <MovieProvider>
            <TestComp />

                    <MovieNavBar />
                    <MoviesFormComponent />
            </MovieProvider>
        </div>
    )
}

export default MovieAppDemo
