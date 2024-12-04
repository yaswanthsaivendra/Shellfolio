import React from 'react';
import { RiGraduationCapFill } from "react-icons/ri";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSolidity } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiCelery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const About = () => {
    return (
        <div id="about" className='min-h-screen bg-gradient-to-b from-bgcolor to-black py-10 sm:pb-0 pb-12'>
            <div className='mx-auto max-w-screen-lg flex flex-col justify-center items-center px-10'
                data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quad" data-aos-duration="1200"
            >
                <div>
                    <p className='font-semibold text-2xl mb-12 text-primary'>About</p>
                </div>

                <div className='flex flex-col items-center space-y-12 sm:flex-row lg:space-x-80 md:space-x-32 sm:space-x-24'>
                    <div className='flex flex-col space-y-20'>
                        <div className='border-2 border-primary shadow-sm rounded-lg w-48 h-48 flex flex-col p-4 items-center space-y-4'>
                            <RiGraduationCapFill size={200} className='text-primary' />
                            <div className='flex flex-col items-center space-y-2'>
                                <h3 className='text-xl tracking-wide'>NIT Surat</h3>
                                <p>B.Tech in Electrical <br />
                                    Engineering</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold pb-8 text-center sm:text-start'>Hobbies</h2>
                            <div className='flex space-x-6'>
                                <div className='flex flex-col space-y-2 items-center'>
                                    <GiWeightLiftingUp size={48} className='text-primary' />
                                    <p>I hit Gym</p>
                                </div>
                                <div className='flex flex-col space-y-2 items-center'>
                                    <BiSolidCameraMovie size={48} className='text-primary' />
                                    <p>Watch Movies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h2 className='text-xl font-semibold pb-8 text-center sm:text-start'>Skills</h2>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex space-x-4 items-center'>
                                <FaPython size={32} className='text-primary'/>
                                <IoLogoJavascript size={32} className='text-primary' />
                                <SiSolidity size={32} className='text-primary' />
                                <FaGolang size={48} className='text-primary' />
                                <TbBrandCpp size={32} className='text-primary' />
                                <SiTypescript size={32} className='text-primary' />
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <SiDjango size={32} className='text-primary' />
                                <FaReact size={32} className='text-primary' />
                                <SiFlask size={32} className='text-primary' />
                                <FaNode size={48} className='text-primary' />
                                <SiNextdotjs size={32} className='text-primary' />
                                <SiTailwindcss size={32} className='text-primary' />
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <FaGitAlt size={32} className='text-primary' />
                                <FaDocker size={32} className='text-primary' />
                                <FaLinux size={32} className='text-primary' />
                                <DiRedis size={48} className='text-primary' />
                                <SiNginx size={32} className='text-primary' />
                                <SiCelery size={32} className='text-primary' />
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <BiLogoPostgresql size={32} className='text-primary' />
                                <SiMongodb size={32} className='text-primary' />
                                <SiMysql size={32} className='text-primary' />
                                <IoLogoFirebase size={32} className='text-primary' />
                                <FaAws size={48} className='text-primary' />
                                <SiGooglecloud size={32} className='text-primary' />
                            </div>
                        </div>

                    </div>

                </div>



            </div>

        </div>
    )
}

export default About