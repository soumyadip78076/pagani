import React from 'react'
import '../CssFiles/Login_Template.css'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function LoginTemplate() {
  return (
    <div className='Main'>
        <div className='Input_area'>
          <Routes>
             <Route path="/signin" element={<SignIn />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/" element={<SignUp />} />
          </Routes>
        </div>
        <div className='Button_area'>
          <NavLink to='/login/signin'><p>Sign In</p></NavLink>
          <NavLink to='/login/signup'><p>Sign Up</p></NavLink>
        </div>

    </div>
  )
}

export default LoginTemplate
