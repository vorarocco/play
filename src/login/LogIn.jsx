import React, { useRef, useState, useContext } from 'react'
import './login.scss'
import { login } from '../context/authContext/apiCall'
import { AuthContext } from '../context/authContext/AuthContext'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();
        login({ email, password }, dispatch)
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
                    disabled={isFetching}
                    >
                        Log In</button>
                <span>New to PLAY? <b>Register now.</b></span>
            </form>
            </div>
        </div>

  )
}

export default Login