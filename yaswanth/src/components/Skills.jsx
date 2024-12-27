import { useState } from 'react';
import { FaPython, FaGolang, FaReact, FaNode, FaGitAlt, FaDocker, FaLinux, FaAws } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiSolidity, SiTypescript, SiDjango, SiFlask, SiNextdotjs, SiNginx, SiCelery, SiTailwindcss, SiMongodb, SiMysql, SiGooglecloud } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = {
        "Languages": [
            { icon: FaPython, name: "Python", color: "#3776AB" },
            { icon: IoLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
            { icon: SiSolidity, name: "Solidity", color: "#e47272" },
            { icon: FaGolang, name: "Go", color: "#00ADD8" },
            { icon: TbBrandCpp, name: "C++", color: "#00599C" },
            { icon: SiTypescript, name: "TypeScript", color: "#3178C6" }
        ],
        "Frameworks": [
            { icon: SiDjango, name: "Django", color: "#21ea9d" },
            { icon: FaReact, name: "React", color: "#61DAFB" },
            { icon: SiFlask, name: "Flask", color: "#FFFFFF" },
            { icon: FaNode, name: "Node.js", color: "#339933" },
            { icon: SiNextdotjs, name: "Next.js", color: "#181818" },
            { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" }
        ],
        "DevOps & Tools": [
            { icon: FaGitAlt, name: "Git", color: "#F05032" },
            { icon: FaDocker, name: "Docker", color: "#2496ED" },
            { icon: FaLinux, name: "Linux", color: "#FCC624" },
            { icon: DiRedis, name: "Redis", color: "#DC382D" },
            { icon: SiNginx, name: "Nginx", color: "#FFFFFF" },
            { icon: SiCelery, name: "Celery", color: "#37814A" }
        ],
        "Databases & Cloud": [
            { icon: BiLogoPostgresql, name: "PostgreSQL", color: "#4169E1" },
            { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
            { icon: SiMysql, name: "MySQL", color: "#4479A1" },
            { icon: IoLogoFirebase, name: "Firebase", color: "#FFCA28" },
            { icon: FaAws, name: "AWS", color: "#FF9900" },
            { icon: SiGooglecloud, name: "GCP", color: "#4285F4" }
        ]
    };

    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="bg-black/20 p-3 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-300 mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={skill.name}
                                    className="relative"
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <Icon
                                        size={20}
                                        className="transition-all duration-300 hover:scale-125"
                                        style={{ color: skill.color }}
                                    />
                                    {hoveredSkill === skill.name && (
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                                            {skill.name}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;