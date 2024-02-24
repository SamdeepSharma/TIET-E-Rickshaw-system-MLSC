import './App.css'
import { Route, Routes } from 'react-router-dom'
import Student from "./components/Student/student"
import Admin from "./components/Admin/admin"
import Login from './components/Login/Login'
import Driver_login from './components/Driver/logindriver'
import Decision from './components/Driver/decision'
import Restmode from './components/Driver/restmode'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/driver-login" element={<Driver_login />} />
        <Route path="/driver-decision" element={<Decision />} />
        <Route path="/driver-decision/rest" element={<Restmode/>}/>
      </Routes>
    </>
  )
}

export default App
