import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './register.scss'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [email,setEmail] = useState("")
    const [username, setUsername] = useState("");
    const [password,setPassword] =useState("")
    const navigate = useNavigate()


    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleRegister = async (e) =>{  
            e.preventDefault() 
            setEmail(emailRef.current.value)
            setUsername(usernameRef.current.value)
            setPassword(passwordRef.current.value)
        try {
            const res = await axios.post(`${process.env.REACT_APP_backendURI}auth/register`,
            { email:emailRef.current.value,username:usernameRef.current.value,password:passwordRef.current.value })
            console.log(res.data)
            navigate('/login')

        } catch (err) {
            console.log(err)
        }
    }

    let handleNavigate = ()=>{
        navigate('/login')
    }

  return (
    <div style={{backgroundImage:'url(/images/register_bg.png)'}} className='register'> 
        <div className='register-top'>
            
            <div className="register-wrapper">
                
                <img className='logo' src="/images/play_logo.png" alt="play-logo" />

                              
            </div>
        </div>
        <div className='wellcome-massage'>
            <h1>Unlimited, Marathon movies and series.</h1>
            <h3>Watch what you like! anywhere and anytime.</h3>

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
                    placeholder='create your password' 
                    required="" 
                    ref={passwordRef}


                />
                <button className='register-button' onClick={handleRegister}>Register</button>
                {/* <p>Do you already has an account ?</p>
                <button onClick={handleNavigate} className='logIn-button'>LogIn</button>  */}

                <span>Do you already has an account ? <b className='b' onClick={handleNavigate}>Login now.</b></span>
            </div>
        </div>
    </div>
  )
}

export default Register