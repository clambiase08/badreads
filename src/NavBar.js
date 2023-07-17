import React from 'react'
import { NavLink } from'react-router-dom'
import { HiOutlineUserCircle } from'react-icons/hi'

export default function NavBar() {
  return (
    <div>
      <div>Home of the world's worst books</div>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/account">Reviews</NavLink>
        <NavLink to="/account"><HiOutlineUserCircle /></NavLink>
      </nav>
    
    </div>
  )
}
