import React, { useRef, useState, useContext } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { login } from '../context/authContext/apiCall'
import { AuthContext } from '../context/authContext/AuthContext'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {  dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        login({ email, password }, dispatch)
        navigate('/')
    }

    let handleNavigate = ()=>{
        navigate('/register')
    }

  return (
    <div style={{backgroundImage:'url(/images/login_bg.png)'}} className='login'> 
        <div className='login-top'>
            <div className="login-wrapper">
                <img className='logo' src="/images/play_logo.png" alt="play-logo" />
            </div>
        </div>
        <div className='wellcome-massage'>
            <form>
                <h1>Log In</h1>
                <input 
                    type="email" 
                    placeholder='email address'
                    required="" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder='Password' 
                    required="" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                
                <button 
                    className='login-button'
                    onClick={handleLogin}
                    
                    >
                        Log In</button>
                <span>New to PLAY? <b className='b_login' onClick={handleNavigate}>Register now.</b></span>
            </form>
            </div>
        </div>

  )
}

export default Login