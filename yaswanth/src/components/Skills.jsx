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
        <div className='flex flex-col gap-3'>
            {/* Row 1 */}
            <div className='flex gap-3 justify-center'>
                <FaPython size={26} className='text-[#3776AB] hover:scale-110 transition-transform' />
                <IoLogoJavascript size={26} className='text-[#F7DF1E] hover:scale-110 transition-transform' />
                <SiSolidity size={26} className='text-[#e47272] hover:scale-110 transition-transform' />
                <FaGolang size={26} className='text-[#00ADD8] hover:scale-110 transition-transform' />
                <TbBrandCpp size={26} className='text-[#00599C] hover:scale-110 transition-transform' />
                <SiTypescript size={26} className='text-[#3178C6] hover:scale-110 transition-transform' />
            </div>

            {/* Row 2 */}
            <div className='flex gap-3 justify-center'>
                <SiDjango size={26} className='text-[#21ea9d] hover:scale-110 transition-transform' />
                <FaReact size={26} className='text-[#61DAFB] hover:scale-110 transition-transform' />
                <SiFlask size={26} className='text-white hover:scale-110 transition-transform' />
                <FaNode size={26} className='text-[#339933] hover:scale-110 transition-transform' />
                <SiNextdotjs size={26} className='text-[#181818] hover:scale-110 transition-transform' />
                <SiTailwindcss size={26} className='text-[#06B6D4] hover:scale-110 transition-transform' />
            </div>

            {/* Row 3 */}
            <div className='flex gap-3 justify-center'>
                <FaGitAlt size={26} className='text-[#F05032] hover:scale-110 transition-transform' />
                <FaDocker size={26} className='text-[#2496ED] hover:scale-110 transition-transform' />
                <FaLinux size={26} className='text-[#FCC624] hover:scale-110 transition-transform' />
                <DiRedis size={26} className='text-[#DC382D] hover:scale-110 transition-transform' />
                <SiNginx size={26} className='text-white hover:scale-110 transition-transform' />
                <SiCelery size={26} className='text-[#37814A] hover:scale-110 transition-transform' />
            </div>

            {/* Row 4 */}
            <div className='flex gap-3 justify-center'>
                <BiLogoPostgresql size={26} className='text-[#4169E1] hover:scale-110 transition-transform' />
                <SiMongodb size={26} className='text-[#47A248] hover:scale-110 transition-transform' />
                <SiMysql size={26} className='text-[#4479A1] hover:scale-110 transition-transform' />
                <IoLogoFirebase size={26} className='text-[#FFCA28] hover:scale-110 transition-transform' />
                <FaAws size={26} className='text-[#FF9900] hover:scale-110 transition-transform' />
                <SiGooglecloud size={26} className='text-[#4285F4] hover:scale-110 transition-transform' />
            </div>
        </div>
    )
}

export default Skills