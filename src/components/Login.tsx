import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SignUp from './SignUp'
import { loginApi } from '../api/UserApi'
import TagLine from './TagLine'
import { toast } from 'react-toastify'

function Login({handleLogIn}:any) {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async () => {
    if (Username.trim() === '' || Password.trim() === '') {
      setError('Username and Password cannot be empty')
      return
    }
    setError('')
    setLoading(true)
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('loading...')
        resolve(undefined)
      }, 2000)
    })
    const res = await loginApi(Username, Password)
    console.log(res, 'is res')
    setLoading(false)
    const token = localStorage.getItem('jwtSecret')
    console.log(token,'token is inside the login')
    if (!token) navigate('/login')
    if (res.status !== 200) {
      toast.error("Login failed, Invalid Creadiantial")
     if (res && 'msg' in res) {
  setError(res.msg);
}
    } else {
      setData(res)
      console.log('navigate to the home...')
      handleLogIn()
      toast.success('Login Successfull.')
      navigate('/home')
      console.log('navigate to the home...end')
    }
  }
  return (
    <div className='w-full h-screen bg-[#ffffff] text-black flex justify-around items-center font-poppins box-border'>
      <div className='w-[250px] h-[400px] bg-[#ffffff] flex flex-col gap-[30px] sm:flex sm:flex-row sm:justify-center sm:w-full sm:items-center sm:gap-44'>
        <TagLine />
        {
          <div className='sm:w-[450px]  sm:h-[500px] sm:flex sm:justify-center sm:items-center sm:flex-col sm:shadow-xl rounded-md shadow-xl/30'>
            <form
              action=''
              className='flex flex-col gap-5 items-center justify-center'
              onSubmit={(e) => e.preventDefault()}
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
              {error && (
                <div className='text-red-500 tracking-tight'>{error}</div>
              )}
              <button
                className={`'h-14 w-72  rounded-md border text-white text-3xl  sm:h-14 sm:w-80 ${
                  loading ? 'bg-gray-400' : 'bg-blue-500'
                }`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Loading' : 'Sign In'}
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
        }
      </div>
    </div>
  )
}

export default Login
