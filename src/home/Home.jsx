import React, { useEffect, useState } from 'react'
import "./home.scss"
import Nav from '../components/navbar/Nav';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';
import axios from 'axios';

import { useContext } from 'react';
import { AuthContext } from '../context/authContext/AuthContext'

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)
  const [type1, setType1] = useState(null)
  const context = useContext(AuthContext)

  useEffect(()=>{
    console.log(context)
    
    const getRandomLists = async ()=>{
      try{
          setType1(type)
          const res = await axios.get(
          `${process.env.REACT_APP_backendURI}lists${type1 ? "?type=" + type1 : ""}${ genre ? "&genre=" + genre : ""}`,
          {
            headers:{
              token:`Bearer ${context.user.accesToken}`
            }
          }
        )
        // console.log(res)
        setLists(res.data) 
      }catch(err){ 
        console.log(err) 
      }
    }
    getRandomLists()
  },[type1,genre])

  return (
    <div className='home'>
        <Nav/>
        <Featured type={type} setGenre={setGenre}/>
        {lists.map((list) => (
          <List list={list} key={list._id} />
      ))}
    </div>
  )
}

export default Home