import React,{useState, useEffect} from 'react'
import AdminEditForm from '../adminEditForm/AdminEditForm'
import { useParams } from "react-router-dom"
import axios from 'axios';


import './AdminEditMovie'

const AdminEditMovie = () => {
    const [movie,setMovie]=useState({})
    let {id} = useParams()

 useEffect(()=>{
    let getMovie = async() =>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_backendURI}movies/find/${id}`
            ,{
                headers:{
                  token:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI4ZjdiMmIzZjQ2MDg0MDExMWFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODUzMzEzNSwiZXhwIjoxNjQ5MTM3OTM1fQ.hsic2ISw4nzf59oKzG-O524jdpS3Ah559gAwirBO9Lo"    
                }
            })
            console.log(res.data)
            setMovie(res.data)
        }catch(err){
            console.log(err)
        }
    }
        getMovie()
    },[])
  return (
    <div>
        <AdminEditForm movie={movie} setMovie={setMovie}/>
    </div>
  )
}

export default AdminEditMovie