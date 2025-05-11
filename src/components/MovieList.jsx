import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div>
        <h4 className='text-lg font-bold mx- px-10  text-white'>{title}</h4>
        <div className='flex overflow-x-scroll  scrollbar-hide'> 
            <div className='flex mx-8'>{
                movies?.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} posterPath = {movie.poster_path}/>
                    )
                })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList