import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {

    const movies = useSelector((store)=>store?.movies);

;    
  return (
    <div className='bg-black'>
      <div className='-mt-50 relative z-30'>
        <MovieList title="Now Playing" movies = {movies?.nowPlayingMovies}/>
        <MovieList title="Top Rated" movies = {movies?.topRatedMovie}/>
        <MovieList title="Popular" movies = {movies?.popularMovies}/>
        <MovieList title="Recommended" movies = {movies?.topRatedMovie}/>
        
      </div>
    </div>
  )
}

export default SecondaryContainer