import React from 'react'
import '../CssFiles/Login.css'
import carImage from '../images/Login_IMG.jpeg'
import LoginTemplate from './LoginTemplate'
function Login() {
  return (
    <div className='login_div'>
       <div className='Design'>
          <img src={carImage} alt='login-img'/>
       </div>
       <div className='login_area'>
         <LoginTemplate/>
       </div>
    </div>
  )
}

export default Login
