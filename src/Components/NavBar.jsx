import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="topnav">
          <a to='/' class="active" href="/">Home</a>
          <a to='/contact' href="/contact">Contact</a>
          <a to='/about'href="/about">About</a>
    </div>
  )
}

export default NavBar