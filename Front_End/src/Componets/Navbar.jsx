import { Link } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'
import "./App.css"


const Navbar = () => {


const navi=useNavigate()

  return (
    <div>
      <div className='navbar'>
      <button onClick={()=>navi("/")}>User</button>
        <button onClick={()=>navi("/notice")}>Notice</button>
      </div>
    </div>
  )
}

export default Navbar
