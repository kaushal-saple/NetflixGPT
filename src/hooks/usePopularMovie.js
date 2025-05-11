import { useEffect } from "react"
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovie = ()=>{
    const dispatch = useDispatch();


    useEffect(()=>{
        getPopularMovie();
    },[])
    
    const getPopularMovie = async ()=>{
        const result = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTION);
        const data = await result.json();
        dispatch(addPopularMovies(data.results))
        // console.log(data.results);
    }
}

export default usePopularMovie