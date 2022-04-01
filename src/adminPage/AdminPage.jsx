import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AdminListL from '../adminListL/AdminListL'
import AdminMovieL from '../adminMovieL/AdminMovieL'
import AdminAddList from '../adminAddList/AdminAddList'
import AdminAddMovie from '../adminAddMovie/AdminAddMovie'
import axios from 'axios';
import AdminEditForm from '../adminEditForm/AdminEditForm'
import Popup from '../components/popup/Popup'
import './adminPage.scss'
import { AuthContext } from '../context/authContext/AuthContext'
import { useContext } from 'react';





const AdminPage = () => {
    const[lists,setLists] = useState([])
    const[list,setList] = useState({})
    const[movies,setMovies] = useState([])
    const context = useContext(AuthContext)

    let getLists = async()=>{
    try{
    // console.log(item)
        const res = await axios.get(`${process.env.REACT_APP_backendURI}lists`,{
            headers:{
              token:
              `Bearer ${context.user.accesToken}`
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
              `Bearer ${context.user.accesToken}` 
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
    <div>
      <h1 className='h1Admin'>AdminPage</h1>

      <Link to='/'>
        <button className='back_bt'>Back</button>
      </Link>
      
         
        <AdminAddMovie addMovie={addMovie}/>
        <AdminMovieL/>
        <AdminListL/>

    </div>

  )
}

export default AdminPage