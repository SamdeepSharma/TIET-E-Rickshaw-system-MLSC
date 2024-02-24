/* eslint-disable no-unused-vars */
import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleStudent = () =>{
    navigate('/student')
  }

  const handleDriver = () =>{
    navigate('/driver')
  }

  const handleAdmin = () =>{
    navigate('/admin')
  }
  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh]'>
      <div className="">
        <h1 className='flex justify-center font-bold text-[30px]'>Muskuraiye! aap thapar mein hain</h1>
        <h1 className='flex justify-center font-bold text-[30px]'>jk</h1>
      </div>
      <div className="font-bold my-[50px]">
        <h1 className="font-semibold flex justify-center text-xl my-[20px]">Login as:</h1>
        <div className="flex flex-col login-as">
          <button className='my-2' onClick={handleStudent}>Student</button>
          <button className='my-2' onClick={handleDriver}>Driver</button>
          <button className='my-2' onClick={handleAdmin}>Admin</button>
        </div>
      </div>
     
    </div>
  )
}

export default Login
