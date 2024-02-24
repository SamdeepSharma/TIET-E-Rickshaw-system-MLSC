import "./driver.css"
import { useNavigate } from 'react-router'

const decision =()=>{
    const navigate = useNavigate();
    const handlechange=()=>{
        navigate('/Map')
    }
    const handlerest=()=>{
        navigate('/driver-decision/rest')
    }
    return <div className="deci">
        <button className="ready btn" onClick={handlechange} >CHALO CHALTE HAIN!!</button>
        <button className="wait btn " onClick={handlerest}>ABHI REST KARENGE</button>
    </div>
}
export default decision