import React, { useEffect, useState } from 'react'
import "./home.scss"
import Nav from '../components/navbar/Nav';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';
import axios from 'axios';


const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)


  useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
          const res = await axios.get(
          `${process.env.REACT_APP_backendURI}lists${type ? "?type=" + type : ""}${ genre ? "&genre=" + genre : ""}`,
          {
            headers:{
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI4ZjdiMmIzZjQ2MDg0MDExMWFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODUzMzEzNSwiZXhwIjoxNjQ5MTM3OTM1fQ.hsic2ISw4nzf59oKzG-O524jdpS3Ah559gAwirBO9Lo"
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
  },[type,genre])

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