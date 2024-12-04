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

const Skills = () => {
    return (
        <div className='flex flex-col space-y-4 justify-center'>
            <div className='flex space-x-4 items-center'>
                <FaPython size={28} className='text-primary' />
                <IoLogoJavascript size={28} className='text-primary' />
                <SiSolidity size={28} className='text-primary' />
                <FaGolang size={36} className='text-primary' />
                <TbBrandCpp size={28} className='text-primary' />
                <SiTypescript size={28} className='text-primary' />
            </div>
            <div className='flex space-x-4 items-center'>
                <SiDjango size={28} className='text-primary' />
                <FaReact size={28} className='text-primary' />
                <SiFlask size={28} className='text-primary' />
                <FaNode size={36} className='text-primary' />
                <SiNextdotjs size={28} className='text-primary' />
                <SiTailwindcss size={28} className='text-primary' />
            </div>
            <div className='flex space-x-4 items-center'>
                <FaGitAlt size={28} className='text-primary' />
                <FaDocker size={28} className='text-primary' />
                <FaLinux size={28} className='text-primary' />
                <DiRedis size={36} className='text-primary' />
                <SiNginx size={28} className='text-primary' />
                <SiCelery size={28} className='text-primary' />
            </div>
            <div className='flex space-x-4 items-center'>
                <BiLogoPostgresql size={28} className='text-primary' />
                <SiMongodb size={28} className='text-primary' />
                <SiMysql size={28} className='text-primary' />
                <IoLogoFirebase size={28} className='text-primary' />
                <FaAws size={36} className='text-primary' />
                <SiGooglecloud size={28} className='text-primary' />
            </div>
        </div>
    )
}

export default Skills