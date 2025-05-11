import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMainMovieTrailer } from "../utils/moviesSlice";

const useMainMovieTrailer=(id)=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchMainTrailer();
      },[]);
    
      const fetchMainTrailer = async()=>{
        const result = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,API_OPTION)
        const  data = await result.json();
        const filterData = data.results.filter((e)=>e.type=="Trailer")
        const mainTrailer = filterData.length?filterData[0]:data.results[0];

        dispatch(addMainMovieTrailer(mainTrailer));
    
      }
}

export default useMainMovieTrailer;