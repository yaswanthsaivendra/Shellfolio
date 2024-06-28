"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link';


const navLinks = [
  {
    "name" : "Home",
    "to" : "home"
  },
  {
    "name" : "About",
    "to" : "about"
  },
  {
    "name" : "Blog",
    "to" : "/blog"
  },
  {
    "name" : "Projects",
    "to" : "projects"
  },
  {
    "name" : "Work Experience",
    "to" : "workExperience"
  }
]

function NavigationBar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className='flex justify-between items-center pl-10 pr-16 pt-4 sticky top-0 z-10 bg-bgcolor'>
        <div className='pt-4'>
            <a href="/">
                <Image 
                src={'/logo.png'}
                alt='pic'  
                width={80}
                height={80}
                className='h-20'
                />
            </a>
        </div>
        <ul className='hidden md:flex items-center justify-evenly'>
          {navLinks.map((item, index) => (
            <li key={index} className='m-2 transition hover:text-primary duration-200 cursor-pointer'>
              {item.name === 'Blog' ? 
              (
              <Link href={item.to}>
              {item.name}
              </Link>
              ) : (
                <ScrollLink
                to={item.to}
                spy={true} smooth={true} duration={500}
                className='p-2'
                >
                  {item.name}
                </ScrollLink>
                
              )}
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
                  {item.name === 'Blog' ? 
                  (<Link 
                    href={item.to}
                    >
                    {item.name}
                    </Link>
                  ) :
                  (
                  <ScrollLink 
                    to={item.to}
                    onClick={() => setNav(!nav)}
                    spy={true} smooth={true} duration={500}>{item.name}</ScrollLink>)}
                </li>
          ))} 
        </ul>
      )}

    </nav>
  )
}

export default NavigationBar