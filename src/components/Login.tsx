import React, { useState } from 'react'

function Login() {
  const [login, setLogin] = useState(true)
  const [Username, setUsername] = useState('')
  return (
    <div className='w-full h-screen bg-[#ffffff] text-black flex justify-center items-center'>
      <div className='w-[250px] h-[400px] bg-[#ffffff] flex flex-col gap-[90px] sm:flex sm:flex-row sm:justify-around sm:w-full sm:items-center'>
        <div className=''>
          <h1 className='text-4xl font-bold'>Welcome user!</h1>
          <span className='text-2xl font-bold'>Flow to the store.</span>
        </div>
        {login && (
          <div className='  '>
            <form
              action=''
              className='flex flex-col gap-4 items-center justify-center'
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type='text'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                className='h-14 w-64 border border-gray-600 p-7 text-2xl rounded-md '
              />
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setUsername(e.target.value)}
                className='h-14 w-64 border border-gray-600 p-7 text-2xl rounded-md '
              />
              <button className='h-14 w-64 bg-blue-500 rounded-md border text-white text-3xl'>
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
