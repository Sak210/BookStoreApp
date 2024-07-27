import React from 'react'
import Home from '../src/home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from '../src/courses/Courses';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
function App() {
  return (
    <>
      <div  className='dark:bg-slate-900 dark:text-white'> 
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/course" element = {<Courses/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/contact" element = {<Contact/>}/>

      </Routes>
      </div>
    </>
  )
}

export default App;
