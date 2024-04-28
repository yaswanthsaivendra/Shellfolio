import React from 'react';
import './wave_styles.css';



const About = () => {
    return (
        <div id="about" className='min-h-[88vh] bg-gradient-to-b from-bgcolor to-black py-10 sm:pb-0 pb-12'>
            <div className='mx-auto max-w-screen-lg flex flex-col justify-center items-center px-10'
                data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-out-quad" data-aos-duration="1200"
                >
                <div>
                    <p className='font-semibold text-2xl mb-12 text-primary'>About</p>
                </div>

                <p>
                    I am an undergrad college student from NIT Surat. I am passionate about Software Engineering and Technology, with a solid foundation in full-stack web development and blockchain development. My journey in these domains includes valuable experiences, such as working as a full-stack web developer intern, freelancing on various projects, and serving as an open-source contributor and mentor. I also have basic knowledge in cybersecurity, mainly in application and network security.
                </p>
                <br />
                <p>
                    My experiences include working as a freelancer with 3 clients so far. I was part of two technical clubs in college, namely GDSC and MLSA. I took part in 7 hackathons to date, and our team secured a position in the top 8 in 2 national hackathons. I also ranked in top 3 winners in 2 of my college hackathons. I made contributions in opensource events like FOSSASIA, GSSOC. I acted as a opensource mentor in GSSOC&apos;22, helping over 20 opensource newcomers to make their first contributions. I completed an internship as a full stack developer at Cohesive AI.
                </p>

            </div>
            {/* <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div> */}
        </div>
    )
}

export default About