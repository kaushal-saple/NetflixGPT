import React from 'react'

const VideoTitle = ({title,overview}) => {
  
  return (
    <div className="py-60 px-10 absolute bg-gradient-to-r from-black/80 w-full aspect-video">
      <h2 className='text-4xl font-bold text-white'>{title}</h2>
      <p className='max-w-4/7 mt-5 opacity-90 text-white'>{overview}</p>

      <div className='mt-6'> 
        <button className='border-1 border-black w-30  p-2 rounded-md mr-5 cursor-pointer hover:scale-105 bg-gray-100 hover:opacity-80'>▶️ Play</button>
        <button className='border-1 border-black w-30  p-2 rounded-md cursor-pointer bg-gray-700 opacity-70 hover:scale-105 text-white'>❗More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle