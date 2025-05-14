import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[15%] flex justify-center'>
        <div className='bg-black w-6/12 rounded'>
          <form className='grid grid-cols-12'> 
            <input
            className='text-gray-700 bg-white px-4 py-2 m-2 rounded col-span-9'
            type='text'
            placeholder='What would you Like to watch?'
            />
        
          <button className='py-1 px-2 m-2 text-white bg-red-700 rounded col-span-3 cursor-pointer'>Search</button>   
        </form>
        </div>
    </div>
  )
}

export default GptSearchBar