import { useRef } from "react";
import language from "../utils/languageConstant"
import { useDispatch, useSelector } from 'react-redux'
import ai from '../utils/geminiAI'
import { API_OPTION } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";


const GptSearchBar = () => {
  const lang = useSelector((store)=>store.langConfig.selectedLanguage);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // console.log(searchText)
  
  const movieSearchTMDB= async(movie)=>{
    const result = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1',API_OPTION)
    const movieJson = await result.json();
    return movieJson;
  }

  //AI search
  const handleSearchButton = async ()=>{
    const query = "Act as a movie recommendation system: " + searchText.current.value + ". give me names of only 5 movies ,separated by coma. example Dhoom,Krish,Taare zameen par,3 iditos,shershaah"
    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: query
  });
  
  //getting the result in a array
  const geminiResult = response.text;
    // if(!geminiResult) return <div></div>
  const movieResult = geminiResult.split(", ");
  const movieTMDBpromises = movieResult.map((movie)=>movieSearchTMDB(movie));
  // console.log(movieTMDB);
  const recommendedMovies = await Promise.all(movieTMDBpromises);
  // console.log(recommendedMovies);
  dispatch(addGptMovies({gptMovie:movieResult, searchTMDB: recommendedMovies}))



  // searching AI_seach movies result to the seach API of TMDB
  
}


  return (
    <div className='pt-[15%] flex justify-center'>
        <div className='bg-black w-6/12 rounded'>
          <form className='grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}> 
            <input
            className='text-gray-700 bg-white px-4 py-2 m-2 rounded col-span-9'
            type='text'
            ref={searchText}
            placeholder={language[lang]?.gptSearchPlaceholder}
            />
        
          <button className='py-1 px-2 m-2 text-white bg-red-700 rounded col-span-3 cursor-pointer'
          onClick={handleSearchButton}
          >
            {language[lang]?.search}
          </button>   
        </form>
        </div>
    </div>
  )
}

export default GptSearchBar