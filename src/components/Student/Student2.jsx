import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Student2 = () => {
   const [formdata ,setformdata] = useState({location:""})
   const navigate = useNavigate();
   const handlechange = (event)=>{
    setformdata(prevdata=>{
       const {name , value} = event.target
        return{
            ...prevdata,
              [name]:value
        }
    })
   }
   const handlesubmit =(event) =>{
        event.preventDefault();
        console.log(formdata);
        navigate("/student3")
   }
  return (
    <>
    <div>
      <h1 className="text-white text-[50px] font-bold font-serif text-center mt-[100px]">Abhi Aap Kahan Hai</h1>
    </div>
    <form className="text-black mt-[100px]"  onSubmit={handlesubmit} >
          <label className="text-white text-[30px] ml-[700px]  " >
            location <span>     </span>
          </label>
          <select name="location" 
          value={formdata.location}
          onChange={handlechange}
           
          >
            <option  value="D">Hostel D</option>
            <option  value="C">Hostel C</option>
            <option  value="B">Hostel B</option>
            <option  value="M">Hostel M</option>
            <option  value="cos">Cos</option>
            <option  value="csed">CSED</option>
            <option  value="F-Block">F-Block</option>
            <option  value="G-Block">G-Block</option>
            <option  value="MainGate">MainGate</option>
            <option  value="hostelQ">hostel Q</option>
            <option  value="HostelPG">Hostel PG</option>
            <option  value="HostelH">Hostel H</option>
            <option  value="HostelJ">Hostel J</option>
            <option  value="Hostelk">Hostel K</option>
            <option  value="HostelL">Hostel L</option>


          </select>
          <br /><br />
          <button className=" ml-[750px] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl h-[50px] w-[100px] px-2 hover:bg-blue-400 hover:scale-105 transition-all duration-200 rounded-md">submit</button>
    </form>
    </>
    
  )
}

export default Student2
