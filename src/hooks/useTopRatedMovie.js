import { useEffect } from "react"
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovie = ()=>{
    const dispatch = useDispatch();


    useEffect(()=>{
        getTopRatedMovie();
    },[])
    
    const getTopRatedMovie = async ()=>{
        const result = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTION);
        const data = await result.json();
        dispatch(addTopRatedMovies(data.results))
        // console.log(data.results);
    }
}

export default useTopRatedMovie