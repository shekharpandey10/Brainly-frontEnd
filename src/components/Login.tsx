import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUp from './SignUp'
import { loginApi } from '../api/UserApi'
import TagLine from './TagLine'

function Login() {
  const [login, setLogin] = useState(true)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const res = loginApi(Username, Password)
    console.log('login', res)
    console.log(res)
  }
  return (
    <div className='w-full h-screen bg-[#ffffff] text-black flex justify-around items-center font-poppins box-border'>
      <div className='w-[250px] h-[400px] bg-[#ffffff] flex flex-col gap-[30px] sm:flex sm:flex-row sm:justify-center sm:w-full sm:items-center sm:gap-44'>
        <TagLine />
        {login ? (
          <div className='sm:w-[450px]  sm:h-[500px] sm:flex sm:justify-center sm:items-center sm:flex-col sm:shadow-xl rounded-md shadow-xl/30'>
            <form
              action=''
              className='flex flex-col gap-5 items-center justify-center'
              onSubmit={handleSubmit}
            >
              <h3 className='text-3xl font-bold text-[#3b3a3a]'>
                Welcome back
              </h3>
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
                onChange={(e) => setPassword(e.target.value)}
                className='h-14 w-72 border border-gray-600 p-7 text-2xl rounded-md  sm:h-14 sm:w-80 '
              />
              <button className='h-14 w-72 bg-blue-500 rounded-md border text-white text-3xl  sm:h-14 sm:w-80'>
                Sign In
              </button>
            </form>
            <div className='text-center mt-4 font-semibold'>
              Not a Member?{' '}
              <span
                className='text-blue-500 cursor-pointer'
                onClick={() => navigate('/signup')}
              >
                SignUp
              </span>
            </div>
          </div>
        ) : (
          <div>
            <SignUp />
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
