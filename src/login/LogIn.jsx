import React, { useRef, useState } from 'react'
import './login.scss'

const Login = () => {
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
                    />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder='Password' 
                    required="" 
                    />
                
                <button className='login-button'>Log In</button>
                <span>New to PLAY? <b>Register now.</b></span>
            </form>
            {/* <h1>Unlimited, Marathon movies and series.</h1>
            <h3>Watch what you like! anywhere and anytime.</h3>
            <p>{message}</p>

            <div className='register-input'>
                <input 
                    type="email" 
                    placeholder='email address'
                    required="" 
                    ref={emailRef}/>

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


                <button className='register-button' onClick={handleRegister}>Register</button> */}
            </div>
        </div>

  )
}

export default Login