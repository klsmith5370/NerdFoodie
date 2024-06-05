import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home';

import { me, logout } from './store'
import { AuthForm } from '../client/components/AuthForm'
// import Contact from './components/Contact';
import Navbar from './components/Navbar'

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(me())
  }, [])

  const handleClick = () => {
    dispatch(logout(navigate))
  }

  return (
      <div>
        <Navbar
          handleClick={handleClick}
          className='fixed'
          isLoggedIn={isLoggedIn}
        />
        {isLoggedIn ? (
          <Routes>
              
          </Routes>
          ) : (
          <Routes>
            
          </Routes>
          )}
          {/* <Contact /> */}
        
        </div>
  )
}

export default App;