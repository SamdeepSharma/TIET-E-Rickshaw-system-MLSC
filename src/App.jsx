import './App.css'
import { Route, Routes } from 'react-router-dom'
import Student from "./components/Student/student"
import Admin from "./components/Admin/admin"
import Driver from "./components/Driver/driver"
import Login from './components/Login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/driver" element={<Driver />} />
      </Routes>
    </>
  )
}

export default App
