import axios from 'axios'
import React, { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
    const [email,setEmail] = useState("")
    const [username, setUsername] = useState("");
    const pass ={
        password: "",
        passwordAgain: ""
    }
    const [password,setPassword] =useState(pass)
    const [message, setMessage] =useState(`Enter your email to register.`)

    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleChange = (e) =>{
        setPassword({
            ...password,
            [e.target.id]:e.target.value,
        })
    }

    const handleRegister = async () =>{   
        if(password.password === password.passwordAgain){
            setMessage(`Welcome to "PLAY"!`)
            setEmail(emailRef.current.value)
            setUsername(usernameRef.current.value)
            setPassword(passwordRef.current.value)
        }else{
            setMessage(`Passwords don't match! Try again!`)
        }
        try {
            await axios.post(`${process.env.REACT_APP_backendURI}auth/register`,{
                headers:{
                    token:
                    "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                    "Content-Type": "application/json" 
                }
            })
        } catch (err) {

        }
    }

  return (
    <div style={{backgroundImage:'url(/images/register_bg.png)'}} className='register'> 
        <div className='register-top'>
            <div className="register-wrapper">
                <img className='logo' src="/images/play_logo.png" alt="play-logo" />
                <button className='logIn-button'>Sign-In</button>
            </div>
        </div>
        <div className='wellcome-massage'>
            <h1>Unlimited, Marathon movies and series.</h1>
            <h3>Watch what you like! anywhere and anytime.</h3>
            <p>{message}</p>

            <div className='register-input'>
                <input 
                    type="email" 
                    placeholder='email address'
                    required="" 
                    ref={emailRef}/>
                <input 
                    type="username" 
                    placeholder='username'
                    required="" 
                    ref={usernameRef}/>

                <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder='create your password' 
                    required="" 
                    value={password.password}
                    ref={passwordRef}
                    onChange={handleChange}

                />
                <input 
                    type="password" 
                    id="passwordAgain"
                    name="passwordAgain"
                    placeholder='confirm password' 
                    required="" 
                    value={password.passwordAgain}
                    onChange={handleChange}
                />


                <button className='register-button' onClick={handleRegister}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register