import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';
import { DownloadSimple } from '@phosphor-icons/react';

const socialLinks = [
  {
    "link": "https://www.linkedin.com/in/yaswanthvendra/",
    "icon": <BsLinkedin size={20} />
  },
  {
    "link": "https://github.com/yaswanthsaivendra",
    "icon": <BsGithub size={20} />
  },
  {
    "link": "https://leetcode.com/yaswanthsaivendra/",
    "icon": <SiLeetcode size={20} />
  },
  {
    "link": "mailto:yaswanthsaivendra@gmail.com",
    "icon": <FiMail size={20} />
  }
]

const HomeComponent = () => {
  return (
    <div id='home' className='element min-h-[88vh] flex-col-reverse space-y-4 lg:space-y-0 items-center lg:flex-row py-8 lg:py-28 px-8 flex  bg-bgcolor'>
      <div className='flex flex-col justify-center w-full max-w-screen-xl'>
        <h6 className='text-primary pb-1'>Hi, my name is</h6>
        <h2 className='font-bold text-5xl sm:text-8xl '>Yaswanth Sai Vendra</h2>
        <div className='flex items-center space-x-3 py-2 mb-14 md:mb-28 ml-1 lg:ml-4 '>
          <p className='text-gray-400'>
            Full Stack Developer | Freelancer | Web3 and CyberSec Enthusiast
          </p>
          {/* <div className='rounded-[6px] relative px-[6px] py-[2px] border flex items-center space-x-2'>
            <span className="animate-ping absolute h-2 w-2 top-0 right-0 rounded-full bg-primary -translate-y-4 border-primary"></span>
            <DownloadSimple size={18} className=''/>
            <p className='text-[18px] leading-[28px] tracking-tight'>Resume</p>
          </div> */}
        </div>
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