import React from 'react'
// import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './header.css'

const HeaderLinks = () => {
  return (
    <div className='sidebar'>
        <nav className='sidebarLinks'>
           <NavLink to='/'><li>Home</li></NavLink>
           <NavLink to='/contacts'><li>Contact Us</li></NavLink>
            <NavLink to='/product'><li>Products</li></NavLink>
            <NavLink to='/testimonials'><li>Testimonials</li></NavLink>
            <NavLink to='/about'><li>About us</li></NavLink>
        </nav>
        </div>
  )
}

export default HeaderLinks