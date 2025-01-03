import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData ] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    console.log(userData);
    
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='mb-2 text-lg font-medium'>What's Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            placeholder='Email@ex.com'
            className='bg-[#EEEEEE] mb-5 border rounded px-2 py-2 w-full text-lg placeholder:text-base'
          />
          <h3 className='mb-2 text-lg font-medium'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder='Enter Password'
            className='bg-[#EEEEEE] mb-5 border rounded px-2 py-2 w-full text-lg placeholder:text-base'
          />
          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-2 py-2 w-full text-base placeholder:text-base'>
            Login
          </button>
          <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>

        </form>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-2 py-2 w-full text-lg placeholder:text-base'>
          Sign In As Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin