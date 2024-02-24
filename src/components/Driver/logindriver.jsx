import { useNavigate } from "react-router-dom"
import axios from 'axios'

const logindriver = () => {
    const navigate = useNavigate('/driver')

    const handleClick = (res) =>{
        try {
            axios({
              method: 'post',
              url: 'http://localhost:3000/',
              data: {
                username: res.username,
                password: res.password
              }
            });
          }
          catch (error) {
            console.log(error)
          }
          finally{
            console.log(res)
          }
        navigate('/driver-decision')
    }

    

    return <div className="main">
        <div className="login">
            <label htmlFor="logid"> LOG ID : </label>
            <input id='logid'></input>
        </div>
            <br></br>
        <div className="Password">
            <label htmlFor="password">ENTER PASSWORD : </label>
            <input id='password' type='password'></input>
        </div>
            <br></br>
        <button className="submit btn" onClick={handleClick}>submit</button>
        
    </div>

}

export default logindriver