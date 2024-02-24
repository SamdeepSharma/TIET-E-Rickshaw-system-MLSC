import React from 'react'
import "../Student/Spinner.css"
import Spinner from '../Student/Spinner';
import Maps from './maps';

import { useState , useEffect } from 'react';
const Map = () => {
    const [showspinner , setshowspinner] = useState(true);
    useEffect(()=>{
     const timeoutID = setTimeout(()=>{
         setshowspinner(false);
     } , 5000)
     return ()=> clearTimeout(timeoutID);
    } ,[]);
 
  return (
    <div>
        <div className="text-center relative top-[100px]">
        {showspinner && <Spinner/>}
        {!showspinner && <Maps/>}
         

        </div>
       
         

    </div>
  )
}

export default Map
