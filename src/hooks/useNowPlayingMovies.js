import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
    const displace = useDispatch();
    const nowPlaying = useSelector((store)=>store?.movies?. nowPlayingMovies);

    const nowPlayingMovieList = async ()=>{
        const result = await fetch ('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION);
        const data = await result.json()
        
        displace(addNowPlayingMovies(data.results));
      }
    
      useEffect(()=>{
        !nowPlaying &&
        nowPlayingMovieList();
      },[])
}
export default useNowPlayingMovies

  