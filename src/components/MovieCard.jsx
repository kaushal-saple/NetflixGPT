import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-52  p-1 m-1 overflow-y-hidden">
        <img 
        className='w-full h-full object-fit rounded-md '
        alt='movie_Photo'
        src={IMG_CDN + posterPath } />
    </div>
  )
}

export default MovieCard