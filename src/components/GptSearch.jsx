import GptSearchBar from './GptSearchBar'
import GptMovieRecommendation from './GptMovieRecommendation'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <img alt='BG-Img' src={BG_IMG} className='fixed -z-10'/>
        <GptSearchBar/>
        <GptMovieRecommendation/>
    </div>
  )
}

export default GptSearch