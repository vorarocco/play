import React, { useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ListItem = ({index}) => {
  const [isHovered,setIsHovered] = useState(false)
  const trailer = 
  "https://cdn.springboardplatform.com/storage/comingsoon.net/conversion/1746594.mp4"
// "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"

// "https://www.imdb.com/video/vi3275932441?ref_=ext_shr_lnk"


  return (
    <div className='listItem' 
          style={{left: isHovered && index * 225 -50 }}
          onMouseEnter={()=> setIsHovered(true)}
          onMouseLeave={()=> setIsHovered(false)}
          >
        <img src="https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg" alt="" />

        {isHovered && (
          <div>

        <video src={trailer} autoPlay={true} loop></video>
        <div className='itemInfo'>
          <div className='icons'>
            <PlayArrowIcon className='icon'/>
            <AddIcon className='icon'/>
            <ThumbUpIcon className='icon'/>
            <ThumbDownIcon className='icon'/>
          </div>
          <div className='itemInfo-top'>
            <span> 1 hour 45 mins</span>
            <span className='limit'>+13</span>
            <span>2000</span>
          </div>
          <div className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore sint asperiores eum inventore explicabo quos consequatur 
          </div>
          <div className='genre'>Action</div>
          </div>
          </div>
        )}
        
    </div>
  )
}

export default ListItem