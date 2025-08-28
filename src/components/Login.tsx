import React, { useState } from 'react'

function Login() {
  const [login, setLogin] = useState(true)
  const [Username, setUsername] = useState('')
  return (
    <div className='w-full h-screen bg-[#ffffff] text-black flex justify-center items-center font-poppins box-border'>
      <div className='w-[250px] h-[400px] bg-[#ffffff] flex flex-col gap-[40px] sm:flex sm:flex-row sm:justify-center sm:w-full sm:items-center sm:gap-44'>
        <div className='sm:h-[100%] w-[90%] sm:w-[700px]   sm:flex-col   '>
          <h1 className='text-3xl font-bold sm:text-7xl '>Keep Your Thought Here</h1>
          <span className='text-xl  sm:text-5xl sm:font-semibold sm:text-blue-300 sm:ml-11'>— where ideas live forever.</span>
        </div>
        {login && (
          <div className='  '>
            
            <form
              action=''
              className='flex flex-col gap-4 items-center justify-center'
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className='text-3xl font-bold text-[#3b3a3a]'>Welcome back</h3>
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
                onChange={(e) => setUsername(e.target.value)}
                className='h-14 w-72 border border-gray-600 p-7 text-2xl rounded-md  sm:h-14 sm:w-80 '
              />
              <button className='h-14 w-72 bg-blue-500 rounded-md border text-white text-3xl  sm:h-14 sm:w-80'>
                Sign In
              </button>

            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
