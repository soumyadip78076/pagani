import React from 'react'
import { Routes,Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
function DetailFillArea() {
  return (
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
  )
}

export default DetailFillArea
