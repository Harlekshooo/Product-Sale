import React, { useEffect, useState } from "react";
import './header.css'
import logo from '../../assets/logo.png'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderLinks from './headerLinks'
import { useDispatch, useSelector } from "react-redux";
import { myLogin } from "../../Slices/UserSlice";


  const Header = () => {

    const dispatch = useDispatch()
    
    // const loggedUser = useSelector((state) => state.logged.value)
    const user = useSelector((state) => state.user.value)
    const loggedIn = useSelector((state) => state.logged.value);
    // console.log(loggedUser); 
    const [setNav, displaySetNav] = useState(false)
    

    const toggleNav = () => {
      displaySetNav(
        !setNav
        )
      }

      const headerClick = () => {
       
      }

      useEffect(() => {
        dispatch(myLogin({ restoredData }))
      }, [])

      const userr = localStorage.getItem('user')
      const restoredData = JSON.parse(userr)
      

  return (
    <div onClick={headerClick} className="container">
       <header>
        <div className='image'>
        <img src={logo} alt='/'/>
        </div>
        {loggedIn && (<nav>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/contacts'><li>Contact Us</li></NavLink>
            <NavLink to='/product'><li>Products</li></NavLink>
            <NavLink to='/testimonials'><li>Testimonials</li></NavLink>
            <NavLink to='/about'><li>About us</li></NavLink>
        </nav>)}
        

        
      {loggedIn ? (!setNav ? (<HiOutlineMenuAlt4 className='menuContainer' onClick={toggleNav}/>) : 
        (<AiOutlineClose className='menuContainerr' onClick={toggleNav}/>)) : (!(!setNav ? (<HiOutlineMenuAlt4 className='menuContainer' onClick={toggleNav}/>) : 
        (<AiOutlineClose className='menuContainerr' onClick={toggleNav}/>)))}  
        
       </header>
        {setNav && <HeaderLinks/> }
        

    </div>
  )
}

export default Header