
const logindriver = () => {
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
        <button className="submit btn">submit</button>
        
    </div>

}

export default logindriver