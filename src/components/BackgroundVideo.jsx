import React from 'react'
import { API_OPTION } from '../utils/constants';
import useMainMovieTrailer from '../hooks/useMainMovieTrailer';
import { useSelector } from 'react-redux';

const BackgroundVideo = ({id}) => {
  const trailerVideo = useSelector((store)=>store?.movies?.mainMovieTrailer)
  // console.log(trailerVideo?.key)

  useMainMovieTrailer(id);
  return (
    <div className='w-full aspect-video'>
      <iframe className='w-full aspect-video'
      src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?autoplay=1&mute=1&controls=0&rel=0&loop=1"}
      title="YouTube video player" 

      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  )
}

export default BackgroundVideo