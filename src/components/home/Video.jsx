import React from 'react'
import video1 from '../../assets/video3.mp4'   // ✅ Correct path
const Video = () => {
  return (
    <div className='h-full w-full'>
     <video src={video1} autoPlay loop muted className='h-full w-full object-cover' />
    </div>
  )
}

export default Video
