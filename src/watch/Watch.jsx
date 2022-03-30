import React from 'react'
import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, Link } from 'react-router-dom';



const Watch = () => {
  const location = useLocation()
  console.log(location)
  const movie = location.state.movie
  console.log(movie)

  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
      </Link>
        <video className='video' autoPlay controls src={movie?movie.video : null}/>
    </div>
  )
}

export default Watch 