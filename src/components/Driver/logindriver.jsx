import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Driver_login = () => {
    const [formdata , setformdata] = useState({
        rollNumber:"" , password:""
    })
    const [btn, setbtn] = useState('Submit')
    const delay = (d)=>{
        return new Promise((resolve,reject)=>{
          setTimeout(() => {
            resolve()
          }, d*1000);
        })
      }
    
    const navigate = useNavigate();
    const submitHandle = async(event)=>{
        event.preventDefault();
        
        try {
              axios({
                method: 'post',
                url: 'http://localhost:3000/',
                data: {
                  p_name: event.username,
                  password: event.password
                }
              });
            }
            catch (error) {
              console.log(error)
            }
            finally{
              console.log(event)
            }
            setbtn('Submitting')
            await delay(2)
            setbtn('Submit')
        console.log(formdata);
        navigate("/driver-decision");
    } 
    const changeHandler = (event)=>{
        setformdata( (prevdata) => (
            {
                ...prevdata,
               [event.target.name]:event.target.value
            }
        )

        )
    }
  return (
    <>
     <div className='forback'>
       <h1 className="font-bold text-[50px] text-center mt-[200px]">Login Yourself</h1>
    </div>
<br /><br />
    <div>
        <form className="flex flex-col text-center items-center" onSubmit={submitHandle}>
            <label className="rounded-md" >
                <input className="text-white"
                type="text"
                name="rollNumber"
                required
                value={formdata.rollNumber}
                placeholder="enter Log Id"
                onChange={changeHandler}
                />
            </label>
           <br />
           <label className="rounded-md" >
                <input className="text-white" 
                type="password"
                name="password"
                required
                value={formdata.password}
                placeholder="enter your password"
                onChange={changeHandler}
                />
            </label>
            <br />
            <div>
                
                <button className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l h-[50px] w-[100px] px-2 hover:bg-blue-400 hover:scale-105 transition-all duration-200 rounded-md">{btn}</button>
            </div>
        </form>
    </div>

    </>
   
  )
}

export default Driver_login