/* eslint-disable no-unused-vars */
import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className="catchy flex mx-10">
        <h1>Muskuraiye! aap thapar mein hain</h1>
        <h1>Tumhari maa ki chu</h1>
      </div>
      <div className="font-bold">
        <h1 className="mx-11">Login as:</h1>
        <div className="font-serif">
          <button>Student</button>
          <button>Driver</button>
          <button>Admin</button>
        </div>
      </div>
     
    </div>
  )
}

export default Login
