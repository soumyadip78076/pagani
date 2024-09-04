import React from 'react'
import '../CssFiles/Login_Template.css'
import { NavLink } from 'react-router-dom'
import DetailFillArea from './DetailFillArea'
function LoginTemplate() {
  return (
    <div className='Main'>
        <div className='Input_area'>
            <DetailFillArea/>
        </div>
        <div className='Button_area'>
            <NavLink to='/signin' ><p1>Sign In</p1></NavLink>
            <NavLink to='/signup' ><p>Sign Up</p></NavLink>
        </div>
    </div>
  )
}

export default LoginTemplate
