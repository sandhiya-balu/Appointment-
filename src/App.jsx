import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Docters from './Pages/Docters'
import Login from './Pages/Login'
import MyProfile from './Pages/MyProfile'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyAppointments from './Pages/MyAppointments'
import Apponitments from './Pages/Apponitments'
import Navbar from './Components/Navbar'
import  './index.css'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Docters/>}/>
        <Route path='/doctors/:speciality' element={<Docters/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Apponitments/>}/>

      </Routes>
      <Footer/>

    </div>
  )
}

export default App