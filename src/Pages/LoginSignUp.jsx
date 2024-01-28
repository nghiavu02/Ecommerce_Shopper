import React from 'react'
import './CSS/LoginSignUp.css'
import { Link } from 'react-router-dom'
const LoginSignUp = () => {
  return (
    <div className='login-signup'>
      <div className='login-signup__container'>
        <h1>Sign Up</h1>
        <div className='login-signup__fields'>
          <input type='text' placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div>
          <button className='login-signup-btn'>Continue</button>
          <p className='login-signup__login'>Already have an account? <Link className='login-signup__link' to='/login'><span>Login here</span></Link></p>
          <div className='login-signup__agree'>
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i gree to terms of use privacy policy.</p>
          </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
