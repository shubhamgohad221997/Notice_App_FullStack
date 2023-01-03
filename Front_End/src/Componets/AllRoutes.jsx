import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Notice_Page from './Pages/Notice_Page';
import User_Page from './Pages/User_Page';

const AllRoutes = () => {

  return (
    <div>
     <Routes>
        <Route path='/' element={<User_Page/>}/>
        <Route path='/notice' element={<Notice_Page/>}/>
     </Routes>


    </div>
  )
}

export default AllRoutes
