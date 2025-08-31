import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Dashbord/Home'
import Button from './components/Dashbord/Button'
function App() { 
  const [user,setUser]=useState(localStorage.getItem('jwtSecret'))
    
  return (
    <BrowserRouter>
     <Routes >
         {
          user?
          (<>
           <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          </>):
(          <>
          <Route path='/' element={<Login/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          </>)
         }
          
        </Routes>
        
    </BrowserRouter>
  )
}

export default App
