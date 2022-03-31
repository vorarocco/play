import React, {useState, useEffect} from 'react'
import AdminListL from '../adminListL/AdminListL'
import AdminMovieL from '../adminMovieL/AdminMovieL'
import AdminAddList from '../adminAddList/AdminAddList'
import AdminAddMovie from '../adminAddMovie/AdminAddMovie'
import axios from 'axios';


const AdminPage = () => {
    const[lists,setLists] = useState([])
    const[list,setList] = useState({})
    const[movies,setMovies] = useState([])

    let getLists = async()=>{
    try{
    // console.log(item)
        const res = await axios.get(`${process.env.REACT_APP_backendURI}lists`,{
            headers:{
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI4ZjdiMmIzZjQ2MDg0MDExMWFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODUzMzEzNSwiZXhwIjoxNjQ5MTM3OTM1fQ.hsic2ISw4nzf59oKzG-O524jdpS3Ah559gAwirBO9Lo" 
              }
            })  
            // console.log(res)
        setLists(res.data)
            
        }catch(err){
        console.log(err)
    }
}

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

    useEffect(()=>{
        getLists()
        getMovies()
      },[])

      let addList = (list)=>{
        setLists([...lists,list])
      }

      let addMovie = (movie)=>{
        setMovies([...movies,movie])
      }

  return (
    <div>AdminPage
        {/* <AdminAddList addList={addList} /> */}
        <AdminAddMovie addMovie={addMovie}/>
        <AdminMovieL/>
        <AdminListL/>
    </div>
  )
}

export default AdminPage