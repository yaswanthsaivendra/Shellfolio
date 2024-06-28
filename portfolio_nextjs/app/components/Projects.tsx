'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsEyeFill } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';
import AOS from "aos";
import "aos/dist/aos.css";
import { Categories } from '../store/projectStore';



const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [openTab, setOpenTab] = useState(0);
    const [isGreaterThanSmallScreen, setIsGreaterThanSmallScreen] = useState(true);
    const [activeProjects, setActiveProjects] = useState(Categories[0].projects);


    useEffect(() => {
        if (window.innerWidth <= 640) setIsGreaterThanSmallScreen(false);
    }, [])

    return (
        <div id='projects' className='element min-h-screen bg-bgcolor py-12 relative'>
            <h1 className='text-center font-semibold mb-12 text-2xl'>Projects</h1>


            <div className=' bg-gray-800 absolute z-10 right-0 left-0 w-[320px] sm:w-[360px] mx-auto shadow-md shadow-primary rounded-lg p-2'>
                <ul className='flex items-center justify-center space-x-4 text-sm text-gray-300'>
                    {Categories.map((category, index) =>
                        <li key={index} className={`cursor-pointer px-2 border border-gray-600 rounded-xl p-2 transition duration-200 ${openTab === index ? 'bg-primary border-primary' : ''}`}
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(index);
                                setActiveProjects(category.projects)
                            }}>
                            {category.name}
                        </li>
                    )}
                </ul>

            </div>

            <div className='flex flex-col space-y-12 justify-center items-center mt-44'>

                {activeProjects.map((project, index) => (

                    isGreaterThanSmallScreen ? (
                        index % 2 === 0 ? (
                            <div className='flex flex-col items-center sm:flex-row sm:space-x-8 space-y-3' key={index}>
                                    <Image
                                        src={project.image} alt="" className='w-72 lg:w-96 md:w-80 sm:h-52 rounded-md shadow transition duration-300 ease-in-out transform hover:shadow-md focus:shadow-md'
                                        width={384}
                                        height={280}
                                        data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out-quad" data-aos-duration="1200" />
                                <div className='w-72 lg:w-96 md:w-80 flex flex-col space-y-2'
                                    data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="1200" >
                                    <h2 className='font-semibold text-lg'>{project.name}</h2>
                                    <p className='text-sm'>{project.description}</p>

                                    <div className=''>
                                        {project.skills?.map((skill, skillIndex) => (
                                            <div key={skillIndex} className='rounded-2xl p-1 m-1 border inline-block text-sm border-primary text-primary'>{skill}</div>
                                        ))}
                                    </div>
                                    <div className='flex justify-evenly'>
                                        <a className='flex items-center rounded-md px-8 lg:px-14 border' target='_blank' href={project.demoLink}>
                                            <span className='mr-2'>Demo</span>
                                            <BsEyeFill size={16} />
                                        </a>
                                        <a className='flex items-center rounded-md px-8 lg:px-14 border' target='_blank' href={project.codeLink}>
                                            <span className='mr-2'>Code</span>
                                            <BiCodeAlt size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className='flex flex-col items-center sm:flex-row sm:space-x-8 space-y-3' key={index}>
                                <div className='w-72 lg:w-96 md:w-80 flex flex-col space-y-2'
                                    data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="1200">
                                    <h2 className='font-semibold text-lg'>{project.name}</h2>
                                    <p className='text-sm'>{project.description}</p>

                                    <div className=''>
                                        {project.skills?.map((skill, skillIndex) => (
                                            <div key={skillIndex} className='rounded-2xl p-1 m-1 border inline-block text-sm border-primary text-primary'>{skill}</div>
                                        ))}
                                    </div>
                                    <div className='flex justify-evenly'>
                                        <a className='flex items-center rounded-md px-8 lg:px-14 border' target='_blank' href={project.demoLink}>
                                            <span className='mr-2'>Demo</span>
                                            <BsEyeFill size={16} />
                                        </a>
                                        <a className='flex items-center rounded-md px-8 lg:px-14 border' target='_blank' href={project.codeLink}>
                                            <span className='mr-2'>Code</span>
                                            <BiCodeAlt size={16} />
                                        </a>
                                    </div>
                                </div>
                                <Image
                                    src={project.image} alt="" className='w-72 lg:w-96 md:w-80 sm:h-52 rounded-md shadow transition duration-300 ease-in-out transform hover:shadow-md focus:shadow-md'
                                    width={384}
                                    height={208}
                                    data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="1200" />
                            </div>
                        )


                    ) : (
                        <div className='flex flex-col items-center sm:flex-row sm:space-x-8 space-y-3' key={index}>
                            <Image
                                src={project.image} alt="" className='w-72 lg:w-96 md:w-80 sm:h-52 rounded-md shadow transition duration-300 ease-in-out transform hover:shadow-md focus:shadow-md'
                                width={384}
                                height={208}
                                data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quad" data-aos-duration="600" />
                            <div className='w-72 lg:w-96 md:w-80 flex flex-col space-y-2'
                                data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="1200">
                                <h2 className='font-semibold text-lg'>{project.name}</h2>
                                <p className='text-sm'>{project.description}</p>

                                <div className=''>
                                    {project.skills?.map((skill, skillIndex) => (
                                        <div key={skillIndex} className='rounded-2xl p-1 m-1 border inline-block text-sm border-primary text-primary'>{skill}</div>
                                    ))}
                                </div>
                                <div className='flex justify-evenly'>
                                    <a className='flex items-center rounded-md px-8 lg:px-14 border' target='_blank' href={project.demoLink}>
                                        <span className='mr-2'>Demo</span>
                                        <BsEyeFill size={16} />
                                    </a>
                                    <a className='flex items-center rounded-md px-8 lg:px-14 border' target='_blank' href={project.codeLink}>
                                        <span className='mr-2'>Code</span>
                                        <BiCodeAlt size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>


        </div>
    )
}

export default Projects