import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieRecommendation = () => {
  const {gptRecommendedMovies,tmbdSearchMovies} = useSelector((store)=>store?.gptRecommendation)
  
  if(!gptRecommendedMovies) return null;
  return (
    <div className= "bg-black/70  p-3 m-6 w-[1080px] mx-auto rounded-md">
      <div>
        {gptRecommendedMovies.map((gptMovie,index)=>
        <MovieList 
        title={gptMovie} 
        movies={tmbdSearchMovies[index].results}
        />)}
      </div>
      

    </div>
  )
}

export default GptMovieRecommendation