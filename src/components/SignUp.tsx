import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { signUpApi } from '../api/UserApi'

function SignUp({ setLogin }) {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const[isSignUp,setIsSignUp]=useState(true)
  const handleSubmit = (e: any) => {
    const res = signUpApi(Username, Password)
    console.log('hello', res)
    setLogin(true)
    setIsSignUp(true)
  }

  return (
    <div className=''>
     { isSignUp &&
       <div className='sm:w-[450px]  sm:h-[500px] sm:flex sm:justify-center sm:items-center sm:flex-col sm:shadow-lg rounded-md '>
        <form
          action=''
          className='flex flex-col gap-5 items-center justify-center'
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className='text-4xl font-bold text-[#3b3a3a]'>Welcome!!</h3>
          <input
            type='text'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            className='h-14 w-72 border border-gray-600 p-7 text-2xl rounded-md 
                sm:h-14 sm:w-80
                '
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
            className='h-14 w-72 border border-gray-600 p-7 text-2xl rounded-md  sm:h-14 sm:w-80 '
          />
          <button
            className='h-14 w-72 bg-blue-500 rounded-md border text-white text-3xl  sm:h-14 sm:w-80'
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
        <div className='text-center mt-4 font-semibold'>
          Already a Member?{' '}
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => setLogin(true)}
          >
            Login
          </span>
        </div>
      </div>
    }
    </div>
  )
}

export default SignUp
