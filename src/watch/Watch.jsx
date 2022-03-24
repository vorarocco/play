import React from 'react'
import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>

        <video className='video' autoPlay progress controls src="https://cdn.springboardplatform.com/storage/comingsoon.net/conversion/1746594.mp4"></video>
    </div>
  )
}

export default Watch