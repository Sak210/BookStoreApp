import React from 'react'
import Home from '../src/home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from '../src/courses/Courses';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  
  const [authUser, setAuthUser] =  useAuth()
  console.log(authUser);

  return (
    <>
      <div  className='dark:bg-slate-900 dark:text-white'> 
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/course" element = {authUser?<Courses/>:<Navigate to="/signup"/>}
        />
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/contact" element = {<Contact/>}/>

      </Routes>
      <Toaster/>
      </div>
    </>
  )
}

export default App;
