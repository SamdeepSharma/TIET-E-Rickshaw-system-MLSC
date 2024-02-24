import './App.css'
import { Route, Routes } from 'react-router-dom'
import Student from "./components/Student/student"
import Admin from "./components/Admin/admin"
import Driver from "./components/Driver/driver"
import Login from './components/Login/Login'
import Student2 from './components/Student/Student2'
import Student3 from './components/Student/Student3'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/student2" element={<Student2/>} ></Route>
        <Route path="/student3" element={<Student3/>} ></Route>
      </Routes>
    </>
  )
}

export default App
