import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
const Student3 = () => {
   const [showspinner , setshowspinner] = useState(true);
   useEffect(()=>{
    const timeoutID = setTimeout(()=>{
        setshowspinner(false);
    } , 10000)
    return ()=> clearTimeout(timeoutID);
   } ,[]);

  return (
    <div>
        <h1 className="text-[50px] text-center ">
        Aapki  सह-सवारी  Ko Dhoonda Jaa Rha Hai !
        </h1>
        <div className="text-center mt-[120px]">
       {
        showspinner && <Spinner/>
       }
       {
        !showspinner && <h1 className="text-[50px] text-center">Your Ride is comming ! </h1>
       }
           
        </div>
    </div>
  )
}

export default Student3
