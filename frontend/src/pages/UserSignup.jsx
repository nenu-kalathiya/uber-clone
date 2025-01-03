import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('')

  const  submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password,
    })
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div cla>
        <img className='w-16 mb-5' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='mb-2 text-lg font-medium'>What's Your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              type="text"
              placeholder='First Name'
              value={firstName}
              onchange={(e)=>{
                setFirstName(e.target.value)
              }}
              className='bg-[#EEEEEE] border rounded px-2 py-2 w-1/2 text-lg placeholder:text-base'
            />
            <input
              required
              type="text"
              placeholder='Last Name'
              value={lastName}
              onchange={(e)=>{
                setLastName(e.target.value)
              }}
              classN
              className='bg-[#EEEEEE] border rounded px-2 py-2 w-1/2 text-lg placeholder:text-base'
            />
          </div>
          <h3 className='mb-2 text-lg font-medium'>What's Your Email</h3>
          <input
            required
            type="email"
            placeholder='Email@ex.com'
            value={email}
              onchange={(e)=>{
                setEmail(e.target.value)
              }}
            className='bg-[#EEEEEE] mb-5 border rounded px-2 py-2 w-full text-lg placeholder:text-base'
          />
          <h3 className='mb-2 text-lg font-medium'>Enter Password</h3>
          <input
            required
            type="password"
            placeholder='Password'
            value={password}
              onchange={(e)=>{
                setPassword(e.target.value)
              }}
            className='bg-[#EEEEEE] mb-5 border rounded px-2 py-2 w-full text-lg placeholder:text-base'
          />
          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-2 py-2 w-full text-base placeholder:text-base'>
            Login
          </button>
          <p className='text-center'>Already Have Account? <Link to='/login' className='text-blue-600'>Login here</Link></p>

        </form>
      </div>
      <div>
       <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className="underline">google Privacy Policy</span> and <span className="underline">Terms of Services apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup