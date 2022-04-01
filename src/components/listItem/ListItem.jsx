import React, { useEffect, useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext'

const ListItem = ({index, item}) => {
  const [isHovered,setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})
  const context = useContext(AuthContext)

  useEffect(()=>{
    console.log(context)

    const getMovie = async()=>{
      try{
        // console.log(item)
        const res = await axios.get(`${process.env.REACT_APP_backendURI}movies/find/${item}`,
        {
            headers:{
              token:
              `Bearer ${context.user.accesToken}` 
          }
        }
        )  
        console.log(res)
        setMovie(res.data)
        
      }catch(err){
        console.log(err)
      }
    }
    getMovie()
  },[item])

  return (
    <Link to={{ pathname: "/watch"}}state={{movie}}>
      <div className='listItem' 
            style={{left: isHovered && index * 225 -50 }}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
            >
              <img src={movie?.img} alt="" />

          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop/>
              
              <div className='itemInfo'>
                <div className='icons'>
                  <PlayArrowIcon className='icon'/>
                  <AddIcon className='icon'/>
                  <ThumbUpIcon className='icon'/>
                  <ThumbDownIcon className='icon'/>
                </div>
                <div className='itemInfo-top'>
                  <span>{movie.duration}</span>
                  <span className='limit'>{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className='description'>
                  {movie.description}
                </div>
                <div className='genre'>{movie.genre}</div>
                </div> 
            </>
          )}
      </div>
    </Link>
  )
}

export default ListItem