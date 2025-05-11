import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import VideoTitle from './VideoTitle'
import {useSelector} from 'react-redux'





const MainContainer = () => {
  const Mainmovie = useSelector((store)=>store?.movies?.nowPlayingMovies);
  
  //early return
  if(!Mainmovie) return
  // console.log(Mainmovie[2])
  const {title,overview,id} = Mainmovie[2]


  return (
    <div >
        <VideoTitle  title={title} overview={overview}/> 
        <BackgroundVideo id={id}/>
    </div>

    
  )
}

export default MainContainer