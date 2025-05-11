import React from 'react'
import Header from './Header'
import { API_OPTION } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browser = () => {

  //custom hook
  useNowPlayingMovies();

  
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


    <div >
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser