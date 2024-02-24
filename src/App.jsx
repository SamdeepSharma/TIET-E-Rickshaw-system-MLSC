import './App.css'
import { Route, Routes } from 'react-router-dom'
import Student from "./components/Student/student"
import Admin from "./components/Admin/admin"
import Login from './components/Login/Login'
import Student2 from './components/Student/Student2'
import Student3 from './components/Student/Student3'
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
        <Route path="/student2" element={<Student2/>} ></Route>
        <Route path="/student3" element={<Student3/>} ></Route>
        <Route path="/driver-login" element={<Driver_login />} />
        <Route path="/driver-decision" element={<Decision />} />
        <Route path="/driver-decision/rest" element={<Restmode/>}/>
      </Routes>
    </>
  )
}

export default App
