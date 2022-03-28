import React, { useEffect, useState } from 'react'
import "./home.scss"
import Nav from '../components/navbar/Nav';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';


const Home = ({type}) => {
  const [lists, setLists] = useState([])

  useEffect(()=>{
    const randomLists = async ()=>{
      try{

      }catch(err){
        console.log(err)
      }
    }
  })
  return (
    <div className='home'>
        <Nav/>
        <Featured type={type}/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home