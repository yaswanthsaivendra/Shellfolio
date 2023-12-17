import React from 'react';
import socialXchange from '../assets/project_images/socialXchange.png';
import homeStay from '../assets/project_images/homeStay.png';
import devnode from '../assets/project_images/devnode.png';
import { BsEyeFill } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';



const myProjects = [
    {
        "name": "SocialXchange",
        "image": socialXchange,
        "description": "A platform where individuals earn and sell social credits to companies for fulfilling Corporate Social \
        Responsibility (CSR) goals. Users engage in social activities, earning credits in education, health, hunger, environment, \
        and more. Companies purchase credits using cryptocurrency (MATIC) for transparent CSR fulfillment.",
        "skills": [
            "Solidity",
            "Hardhat",
            "React",
            "Polygon"
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/socialXchange",
        "codeLink": "https://github.com/yaswanthsaivendra/socialXchange",
    },
    {
        "name": "homeStay",
        "image": homeStay,
        "description": "HomeStay is a decentralized P2P home rental service application. It uses the concepts of Smart Contract based agreements and Timebased wallet transactions in manging the \
        rental service.",
        "skills": [
            "Solidity",
            "React",
            "Truffle",
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/homeStay",
        "codeLink": "https://github.com/yaswanthsaivendra/homeStay",
    },
    {
        "name": "Devnode",
        "image": devnode,
        "description": "A community-based web platform where people can post their needs for team members to participate \
        alongside them in upcoming hackathons, coding events and opensource projects.",
        "skills": [
            "Flask",
            "Javascript",
            "BootStrap",
            "Twilio"
        ],
        "demoLink": "https://github.com/yaswanthsaivendra/Devnode",
        "codeLink": "https://github.com/yaswanthsaivendra/Devnode",
    },


]


const Projects = () => {

    const isGreaterThanSmallScreen = window.innerWidth >= 640; //breakpoint for a screen larger than small screen
    return (
        <div id='Projects' className='element bg-bgcolor py-12'>
            <h1 className='text-center font-semibold mb-12 text-2xl'>Projects</h1>
            <div className='flex flex-col space-y-20 justify-center items-center'>

                {myProjects.map((project, index) => (

                    isGreaterThanSmallScreen ? (
                        index % 2 === 0 ? (
                            <div className='flex flex-col items-center sm:flex-row sm:space-x-8 space-y-3' key={index}>
                                <img src={project.image} alt="" className='w-72 lg:w-96 md:w-80 sm:h-52 rounded-md shadow transition duration-300 ease-in-out transform hover:shadow-md focus:shadow-md' />
                                <div className='w-72 lg:w-96 md:w-80 flex flex-col space-y-2'>
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
                                <div className='w-72 lg:w-96 md:w-80 flex flex-col space-y-2'>
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
                                <img src={project.image} alt="" className='w-72 lg:w-96 md:w-80 sm:h-52 rounded-md shadow transition duration-300 ease-in-out transform hover:shadow-md focus:shadow-md' />
                            </div>
                        )


                    ) : (
                        <div className='flex flex-col items-center sm:flex-row sm:space-x-8 space-y-3' key={index}>
                            <img src={project.image} alt="" className='w-72 lg:w-96 md:w-80 sm:h-52 rounded-md shadow transition duration-300 ease-in-out transform hover:shadow-md focus:shadow-md' />
                            <div className='w-72 lg:w-96 md:w-80 flex flex-col space-y-2'>
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