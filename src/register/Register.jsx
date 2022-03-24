import React, { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleRegister = () =>{
        setEmail(emailRef.current.value)
        setPassword(passwordRef.current.value)
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
            <p>Enter your email to register.</p>
            <div className='register-input'>
                <input type="email" placeholder='email address' ref={emailRef}/>

                {/* {!password === passwordAgain
                } */}
                <input type="password" placeholder='create your password' />
                <input type="passwordAgain" placeholder='confirm password' />


                <button className='register-button'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register