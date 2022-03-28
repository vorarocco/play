import './App.scss';
import {Route, Routes, Navigate} from "react-router-dom"
import Home from './home/Home';
import Watch from './watch/Watch';
import Register from './register/Register';
import LogIn from './login/LogIn';

function App() {
  const user = true
  return (

    <div> 
      <Routes>
        <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!user ? <LogIn /> : <Navigate to="/"/>}/>
        <Route exact path="/" element={user ? <Home/> : <Navigate to="/register"/>}/>
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies"/>}/>
            <Route path="/series" element={<Home type="series"/>}/>
            <Route path="/watch" element={<Watch />}/>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App; 
