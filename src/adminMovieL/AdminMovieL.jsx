import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './adminMovieL.scss'
import axios from 'axios';


const AdminMovieL = () => {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})

        let getMovies = async()=>{
          try{
            // console.log(item)
            const res = await axios.get(`${process.env.REACT_APP_backendURI}movies`,{
                headers:{
                  token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI4ZjdiMmIzZjQ2MDg0MDExMWFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODUzMzEzNSwiZXhwIjoxNjQ5MTM3OTM1fQ.hsic2ISw4nzf59oKzG-O524jdpS3Ah559gAwirBO9Lo" 
              }
            })  
            // console.log(res)
            setMovies(res.data)
            
          }catch(err){
            console.log(err)
          }
        }

      let deleteMovie = async(movie)=>{
        let data = await axios.delete(`${process.env.REACT_APP_backendURI}movies/${movie._id}`,{
          method: 'DELETE',
          body: null,
          headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI4ZjdiMmIzZjQ2MDg0MDExMWFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODUzMzEzNSwiZXhwIjoxNjQ5MTM3OTM1fQ.hsic2ISw4nzf59oKzG-O524jdpS3Ah559gAwirBO9Lo",
            "Content-Type": "application/json" 
        }
      })  
      let allMovies = await data.json()
      if (allMovies){
      setMovies(allMovies)
      }
      }

      useEffect(()=>{
        getMovies()
      },[])
    
  return (
    <div className='movieList_container'>
        <div className='styles_item'>
        <h1 className='title'>Movie</h1>
        <table className='table'>
                <tbody>
                    <tr className='trTitle'>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Limit</th>
                        <th>Genre</th>
                        <th>Action</th>
                    </tr>
                </tbody>

            {movies?.map(movie =>{
                return(
                    <tbody key={movie._id}>
                        <tr>
                        <td >{movie._id}</td>
                        <td><img className='smallImage' src={movie.img} alt=""/></td>
                        <td>{movie.title}</td>
                        <td>{movie.year}</td>
                        <td>{movie.limit}</td>
                        <td>{movie.genre}</td>
                        <td>
                          <Link to={{pathname:`/movies/${movie._id}/edit`}}>
                            <button className='button edit_bt'>Edit</button>
                          </Link>
                            <button className='button delete_bt' onClick={()=> deleteMovie(movie)}>Delete</button>
                        </td>
                    </tr>
                    </tbody>

                )
            })}
            </table>
        </div>
    </div>
  )
}

export default AdminMovieL
