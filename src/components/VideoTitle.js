import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className=' w-screen aspect-video absolute text-white pt-64 px-12 bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{original_title}</h1>
      <p className='py-6 text-xl w-3/6'>{overview}</p>
      <button className='bg-white text-black p-4 px-12 rounded-lg text-xl'>Play</button>
      <button className='bg-gray-500 p-4 px-12 rounded-lg text-xl mx-2'>More Info</button>
    </div>
  )
}

export default VideoTitle;
