import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    "link" : "https://www.linkedin.com/in/yaswanthvendra/", 
    "icon" : <BsLinkedin size={20}/>
  },
  {
    "link" : "https://github.com/yaswanthsaivendra", 
    "icon" : <BsGithub size={20}/>
  },
  {
    "link" : "https://leetcode.com/yaswanthsaivendra/", 
    "icon" : <SiLeetcode size={20}/>
  },
  {
    "link" : "mailto:yaswanthsaivendra@gmail.com", 
    "icon" : <FiMail size={20}/>
  }
]

const HomeComponent = () => {
  return (
    <div id='home' className='element min-h-[88vh] pb-28 flex flex-col flew-grow justify-end bg-bgcolor'>
        <div className='h-full flex flex-col justify-center w-full px-8 max-w-screen-xl'>
            <h6 className='text-primary pb-1'>Hi, my name is</h6>
            <h2 className='font-bold text-5xl sm:text-8xl '>Yaswanth Sai Vendra</h2>
            <p className='max-w-4xl text-gray-400 py-2 mb-14 md:mb-28 ml-1 lg:ml-4'>
                Full Stack Web Developer | Blockchain Developer | Freelancer | Backend Dev Intern&apos;24 @K&S DigiProtect | Backend Dev Intern&apos;24 @MikeLegal | Full Stack Developer Intern&apos;23 @Cohesive AI | Open Source Mentor @GSSOC&apos;22
            </p>
        <div className='cursor-pointer flex-row justify-center pr-8 space-x-4 flex md:flex-col md:space-x-0 md:space-y-3 lg:space-y-4 md:items-start'
          data-aos="zoom-out" data-aos-offset="0" data-aos-easing="ease-out" data-aos-duration="1200">
          {socialLinks.map((item, index) => (
              <a key={index} target='blank' className='transition hover:text-primary duration-200' href={item.link}>
                {item.icon}
              </a>
          ))}
        </div>
        </div>
    </div>
  )
}

export default HomeComponent