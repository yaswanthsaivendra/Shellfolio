import React, { useState } from 'react';
import Logo from './../assets/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  {
    "name" : "Home"
  },
  {
    "name" : "Projects"
  },
  {
    "name" : "Work Experience"
  },
  {
    "name" : "Contact"
  }
]

function NavigationBar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className='flex justify-between items-center pl-10 pr-16 pt-4'>
        <div className='pt-4'>
            <a href="/">
                <img src={Logo} alt='pic'  className='w-20 h-20'/>
            </a>
        </div>
        <ul className='hidden md:flex items-center justify-evenly'>
          {navLinks.map((item, index) => (
                <li key={index} className='p-2 m-2 transition hover:text-primary duration-200'>
                  <a href="#">{item.name}</a>
                </li>
          ))}  
        </ul>

        {/* hamburger  */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer text-gray-400 z-10 md:hidden'>
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {/* mobile nav menu  */}
        {nav && ( 
        <ul className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-4xl space-y-12 text-gray-400 bg-bgcolor md:hidden'>
          {navLinks.map((item, index) => (
                <li key={index} className='p-2 m-2 transition hover:text-primary duration-200'>
                  <a href="#">{item.name}</a>
                </li>
          ))} 
        </ul>
      )}
       

    </nav>
  )
}

export default NavigationBar