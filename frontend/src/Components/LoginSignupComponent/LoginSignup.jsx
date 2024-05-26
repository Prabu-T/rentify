import React, { useState } from 'react'
import user_icon from './account.png'
import email_icon from './email.png'
import password_icon from './password.png'
import { GoogleLogin } from '@react-oauth/google'
import './LoginSignupstyle.css'

export const LoginSignup = () => {
const[action,setAction]=useState("Sign Up");

const responseMessage=(response) => {
    console.log(response);
    
}
const errorMessage =(error) =>{
    console.log(error);
}
  return (
    
        <div className="Container">
            <div className="heading">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon}/>
                    <input type='text' placeholder='Username'></input>
                </div>}
                
                <div className="input">
                    <img src={email_icon} />
                    <input type='text' placeholder='Email Id'></input>
                </div>
                <div className="input">
                    <img src={password_icon} />
                    <input type='text' placeholder='Password'></input>
                </div>
            </div>
            {action==="Sign Up"?<div><GoogleLogin onSuccess={responseMessage} onError={errorMessage}/></div>:<div className="forgot-password">Forgot password ? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

        </div>
    
  )
}
