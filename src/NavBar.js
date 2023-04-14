import React from 'react'
import { Link } from 'react-router-dom' //link uses react, and saves recursive requests to server

const NavBar = () => {
  
  return (
    <div className='navbar'>
      <h1>NavBar</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>New Blog </Link>
      </div>
    </div>
  )
}

export default NavBar
