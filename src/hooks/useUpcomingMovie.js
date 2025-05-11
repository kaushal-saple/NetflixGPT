import { useEffect } from "react"
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovie = ()=>{
    const dispatch = useDispatch();


    useEffect(()=>{
        getUpcomingMovie();
    },[])
    
    const getUpcomingMovie = async ()=>{
        const result = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTION);
        const data = await result.json();
        dispatch(addUpcomingMovies(data.results))
        // console.log(data.results);
    }
}

export default useUpcomingMovie;