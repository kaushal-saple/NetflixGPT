import { useEffect } from "react"
import { API_OPTION } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovie = ()=>{
    const dispatch = useDispatch();
    const popularMovie = useSelector((store)=>store?.movies?.popularMovies);


    useEffect(()=>{
        !popularMovie &&
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