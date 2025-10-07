import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Login from './components/Login'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Dashbord/Home'
import Button from './components/Dashbord/Button'
function App() { 
  console.log('hello app')
  const [user,setUser]=useState(
    !!localStorage.getItem('jwtSecret')
  )
 
function handleLogOut(){
  localStorage.removeItem('jwtSecret')
  setUser(false)
}

function handleLogIn(){
  setUser(true)
}
  // const user=localStorage.getItem('jwtSecret')


    
  return (
    <BrowserRouter>
     <Routes >
         {
          user?
          (<>
           <Route path='/' element={<Home handleLogOut={handleLogOut}/>}/>
          <Route path='/home' element={<Home handleLogOut={handleLogOut}/>}/>
          <Route path='/*' element={<Home/>}/>
          
          </>):
(          <>
         
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login handleLogIn={handleLogIn} />} />
           <Route path='*' element={<Login handleLogIn={handleLogIn}/>}/>
          </>)
         }
          
        </Routes>
        <ToastContainer/>
    </BrowserRouter>
  )
}



export default App
