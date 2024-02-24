import './driver.css'
import Logindriver from './logindriver'
import Decision from './decision'

const driver = () => {
  return (
    <div>
    <h1 className='heading'>ENTER YOUR LOGIN DETAILS </h1>
    <Logindriver/>
    <Decision/>
    </div>
  )
}

export default driver
