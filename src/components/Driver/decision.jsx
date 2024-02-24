import "./driver.css"
import { useNavigate } from 'react-router'

const decision =()=>{
    const navigate = useNavigate();
    const handlerest=()=>{
        navigate('/driver-decision/rest')
    }
    return <div className="deci">
        <button className="ready btn" >CHALO CHALTE HAIN!!</button>
        <button className="wait btn " onClick={handlerest}>ABHI REST KARENGE</button>
    </div>
}
export default decision