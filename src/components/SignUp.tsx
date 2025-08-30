import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { signUpApi } from '../api/UserApi'
import TagLine from './TagLine'

function SignUp() {
  const [Username, setUsername] = useState<any>('')
  const [Password, setPassword] = useState<any>('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const handleSubmit = async () => {
    if (Username.trim() === '' || Password.trim() === '') {
      setError('Username and Password cannot be empty')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => console.log('loading...'), 2000)
    const res = await signUpApi(Username, Password)
    console.log('hello', res)
    setData(res)
    setLoading(false)
    if (res && res?.status === 200) {
      navigate('/login')
    } else {
      navigate('/signup')
    }
    setIsSignUp(true)
  }

  return (
    <div className='w-full h-screen bg-[#ffffff] text-black flex justify-around items-center font-poppins box-border'>
      <div className='w-[250px] h-[400px] bg-[#ffffff] flex flex-col gap-[30px] sm:flex sm:flex-row sm:justify-center sm:w-full sm:items-center sm:gap-44'>
        <TagLine />
        {
          <div className='sm:w-[450px]  sm:h-[500px] sm:flex sm:justify-center sm:items-center sm:flex-col sm:shadow-lg rounded-md '>
            <form
              action=''
              className='flex flex-col gap-5 items-center justify-center'
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className='text-4xl font-bold text-[#3b3a3a]'>Welcome!!</h3>
              {error && (
                <div className='text-red-600 font-semibold text-sm'>
                  {error}
                </div>
              )}
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
              {data && (
                <div
                  className={
                    data.status === 200 ? 'text-green-400' : 'text-red-400'
                  }
                >
                  {data.msg}
                </div>
              )}
              <button
                className={`h-14 w-72 rounded-md border text-white text-3xl  sm:h-14 sm:w-80 ${
                  loading ? 'bg-gray-500' : 'bg-blue-500'
                }  `}
                disabled={loading}
                onClick={handleSubmit}
              >
                {!loading ? 'Sign Up' : 'Loading...'}
              </button>
            </form>
            <div className='text-center mt-4 font-semibold'>
              Already a Member?{' '}
              <span
                className='text-blue-500 cursor-pointer'
                onClick={() => navigate('/login')}
              >
                Login
              </span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default SignUp
