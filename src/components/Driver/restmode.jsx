import './driver.css'
import { useNavigate } from 'react-router'

const restmode =()=>{
    const navigate = useNavigate();
    const handleclick=()=>{
        navigate("/Map")
    }
    return <div>
        <h1 className='restmode'>Rest mode on !!</h1>
        <h1 className='restmode'>Click on green button to ride</h1>
        <button className="agree btn" onClick={handleclick}>Chalo Chalte Hain</button>
    </div>
}

export default restmode;