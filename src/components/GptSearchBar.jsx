import language from "../utils/languageConstant"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const lang = useSelector((store)=>store.langConfig.selectedLanguage);

  return (
    <div className='pt-[15%] flex justify-center'>
        <div className='bg-black w-6/12 rounded'>
          <form className='grid grid-cols-12'> 
            <input
            className='text-gray-700 bg-white px-4 py-2 m-2 rounded col-span-9'
            type='text'
            placeholder={language[lang]?.gptSearchPlaceholder}
            />
        
          <button className='py-1 px-2 m-2 text-white bg-red-700 rounded col-span-3 cursor-pointer'>{language[lang]?.search}</button>   
        </form>
        </div>
    </div>
  )
}

export default GptSearchBar