import './App.scss';
import axios from "axios"
import {Route, Routes, Navigate} from "react-router-dom"
import Home from './home/Home';
import Watch from './watch/Watch';
import Register from './register/Register';
import LogIn from './login/LogIn';
import AdminPage from './adminPage/AdminPage';
import { useEffect, useState } from 'react';
// import AdminEditForm from './adminEditForm/AdminEditForm';
import AdminEditMovie from './adminEditMovie/AdminEditMovie';
import { useContext }from 'react'
import {AuthContext}from './context/authContext/AuthContext'

function App() {

  // const user = false
  const { user } = useContext(AuthContext);
  console.log(user)

  return (

    <div> 
      <Routes>
        
        <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>}/>
        {/* <Route path="/register" element={<Register/>}/> */}

        <Route path="/login" element={!user ? <LogIn /> : <Navigate to="/"/>}/>
        {/* <Route path="/login" element={<LogIn />}/> */}

        <Route exact path="/" element={user ? <Home/> : <Navigate to="/register"/>} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movie"/>}/>
            <Route path="/series" element={<Home type="series"/>}/>
            <Route path="/watch" element={<Watch />}/>
          </>
        )}
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/movies/:id/edit" element={<AdminEditMovie/>}/>




      </Routes>
    </div>
  );
}

export default App; 
