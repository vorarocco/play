import React,{useState, useEffect} from 'react'
import AdminEditForm from '../adminEditForm/AdminEditForm'
import { useParams } from "react-router-dom"
import axios from 'axios';
import { AuthContext } from '../context/authContext/AuthContext'
import { useContext } from 'react';


import './AdminEditMovie'

const AdminEditMovie = () => {
    const [movie,setMovie]=useState({})
    let {id} = useParams()
    const context = useContext(AuthContext)


 useEffect(()=>{
    let getMovie = async() =>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_backendURI}movies/find/${id}`
            ,{
                headers:{
                  token:
                  `Bearer ${context.user.accesToken}`    
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