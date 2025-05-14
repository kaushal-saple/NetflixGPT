import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useTopRatedMovie from '../hooks/useTopRatedMovie'
import useUpcomingMovie from '../hooks/useUpcomingMovie'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browser = () => {

  //custom hook
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  const toggleGptSearchView = useSelector((store)=>store?.showGptSearch?.showGptSearchView);
  // console.log(toggleGptSearchView);

  
  return (


  //   {
  //   -MainContainer
  //     -Background Video
  //     -Video title
  //     -buttons
  //  -secondary container
  //     -MovieList*n
  //       -MovieCards
  //  }


    <div>
      <Header/>
      {
        toggleGptSearchView?
        <GptSearch/>:
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>  
      }   
    </div>
  )
}

export default Browser