import React, { useState, useEffect } from 'react'
import './adminMovieL.scss'
import axios from 'axios';


const AdminMovieL = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
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

            {movies?.map(onemovie =>{
                return(
                    <tbody key={onemovie._id}>
                        <tr>
                        <td >{onemovie._id}</td>
                        <td><img className='smallImage' src={onemovie.img} alt=""/></td>
                        <td>{onemovie.title}</td>
                        <td>{onemovie.year}</td>
                        <td>{onemovie.limit}</td>
                        <td>{onemovie.genre}</td>
                        <td>
                            <button className='button edit_bt'>Edit</button>
                            <button className='button delete_bt'>Delete</button>
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