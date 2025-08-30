import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Dashbord/Home'
function App() { 
  
  return (
    <BrowserRouter>
     <Routes >
          <Route path='/home' element={<Home/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
