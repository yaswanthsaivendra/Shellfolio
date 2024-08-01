import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import workExperiences from '../store/workExperienceStore';

const WorkExperience = () => {
    return (
        <div id='workExperience' className='bg-bgcolor flex flex-col py-12'>
            <h2 className='text-center text-2xl font-semibold mb-24'>Work Experience</h2>
            <div className='flex flex-col mx-auto md:ml-40 space-y-12 px-2 sm:px-8'>
                {workExperiences.map((workExperience, index) => (
                    <div key={index} className='flex items-start space-x-12'>
                        <div className='w-4 h-4 bg-primary rotate-45 mt-7 hidden sm:block'></div>
                        <div className=''>
                            <div className='text-gray-400 text-xs'>{workExperience.date}</div>
                            <h3 className='text-2xl font-medium tracking-wide uppercase mb-2 mt-1'>{workExperience.title}</h3>
                            <div className='text-sm flex space-x-8 md:space-x-24 mt-1'>
                                <div className='flex flex-col'>
                                    <div className='flex items-center space-x-1'>
                                        <FaLocationDot size={14} className='text-primary' />
                                        <div className=''>{workExperience.location}</div>
                                    </div>
                                    {workExperience.company ?
                                        (
                                            <a href="" className='flex items-center space-x-1'>
                                                <FaBuilding size={12} className='text-primary' />
                                                <div className=''>{workExperience.company}</div>
                                            </a>
                                        ) : ""
                                    }
                                </div>
                                <div className='flex flex-wrap space-x-2'>
                                    {workExperience.skills.map((skill, index) => (
                                        <div key={index} className='text-xs h-6 rounded-xl bg-white bg-opacity-10 px-[6px] py-1 text-white'>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default WorkExperience