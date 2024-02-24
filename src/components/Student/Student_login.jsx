import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Student_login = () => {
    const [btn, setbtn] = useState('Submit')
    const [formdata , setformdata] = useState({
        rollNumber:"" , password:""
    })
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
        setbtn('Submitting')
            await delay(2)
            setbtn('Submit')
        console.log(formdata);
        navigate("/student2");
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
     <div>
       <h1 className="font-bold text-[50px] text-center relative top-[100px] ">Login Yourself</h1>
    </div>
<br /><br />
    <div>
        <form className="flex flex-col text-center items-center relative top-[100px]" onSubmit={submitHandle}>
            <label className="rounded-md" >
                <input className="text-black"
                type="number"
                name="rollNumber"
                required
                value={formdata.rollNumber}
                placeholder="enter roll number"
                onChange={changeHandler}
                />
            </label>
           <br />
           <label className="rounded-md" >
                <input className="text-black" 
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

export default Student_login
