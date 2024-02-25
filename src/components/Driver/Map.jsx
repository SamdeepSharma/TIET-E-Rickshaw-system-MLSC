
import "../Student/Spinner.css"
import Spinner from '../Student/Spinner';
import { useNavigate } from "react-router-dom";
// import Maps from './maps';
// import redirect from './html_redirect/redirect.html'

import { useState , useEffect } from 'react';
const Map = () => {
    const navigate = useNavigate();
    const [showspinner , setshowspinner] = useState(true);
    useEffect(()=>{
     const timeoutID = setTimeout(()=>{
         setshowspinner(false);
     } , 5000)
     return ()=> clearTimeout(timeoutID);
    } ,[]);

  return (
    <div>
        <div className="text-center min-h-[100vh] flex justify-center items-center">
        {showspinner && <Spinner/>}
        {!showspinner && <button className="bg-slate-500 hover:scale-105 transition-all duration-200"><a href="https://html-inky-seven.vercel.app/">Open Map</a></button>}
         

        </div>
       
         

    </div>
  )
}

export default Map
