import React from 'react'
import "./home.scss"
import Nav from '../components/navbar/Nav';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';


const Home = () => {
  return (
    <div className='home'>
        <Nav/>
        <Featured />
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home