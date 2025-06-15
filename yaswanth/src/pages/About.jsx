import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import Background from '../components/Background.jsx';
import { FaReact, FaNode, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiTypescript, SiTailwindcss } from "react-icons/si";

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Core technologies - simplified and focused
    const coreSkills = [
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: FaDocker, name: "Docker", color: "#2496ED" },
        { icon: FaPython, name: "Python", color: "#3776AB" },
        { icon: SiDjango, name: "Django", color: "#0F7B3C" },
        { icon: FaAws, name: "AWS", color: "#FF9900" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" }
    ];

    const highlights = [
        {
            number: "4+",
            label: "Years Experience",
            description: "Building scalable applications"
        },
        {
            number: "20+",
            label: "Projects Completed",
            description: "From concept to deployment"
        },
        {
            number: "∞",
            label: "Lines of Code",
            description: "Written with passion"
        }
    ];

    return (
        <div className="min-h-screen w-full relative overflow-hidden pt-20 md:pt-24 pb-20 md:pb-12">
            <Background variant="about" />
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12"
            >
                <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-generalsans mb-4 tracking-tight">
                        About Me
                    </h1>
                    <p className="text-white/70 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed px-4">
                        Discover my journey, expertise, and passion for crafting exceptional digital experiences
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {/* Tech Stack - Simplified */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <div className="group w-full h-full ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-br from-black-200/90 via-black-300/90 to-black-200/90 rounded-2xl backdrop-blur-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 transition-all duration-700 hover:shadow-2xl">
                            <div className="mb-4 sm:mb-6">
                                <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent mb-2 sm:mb-3">
                                    Tech Stack
                                </p>
                                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                                    Core technologies I use to build exceptional applications
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                                {coreSkills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            className="group/skill flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl bg-black-300/40 backdrop-blur-sm ring-1 ring-white/5 hover:ring-accent/30 hover:bg-accent/5 transition-all duration-300"
                                            whileHover={{ y: -4, scale: 1.05 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                        >
                                            <Icon
                                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1 sm:mb-2 transition-transform duration-300 group-hover/skill:scale-110"
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-white/80 text-xs font-medium text-center leading-tight">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Highlights */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <div className="group w-full h-full ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-bl from-black-200/90 via-black-300/90 to-black-100/90 rounded-2xl backdrop-blur-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 transition-all duration-700 hover:shadow-2xl">
                            <div className="mb-4 sm:mb-6">
                                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                                    Experience Highlights
                                </p>
                                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                                    Numbers that tell my development story
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        className="text-center p-2 sm:p-3 md:p-4"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                    >
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-1">
                                            {item.number}
                                        </div>
                                        <div className="text-white font-medium text-xs sm:text-sm mb-1">
                                            {item.label}
                                        </div>
                                        <div className="text-white/60 text-xs leading-tight">
                                            {item.description}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Box */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-2">
                        <div className="group w-full h-full ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-br from-black-100/90 via-black-200/90 to-black-300/90 rounded-2xl backdrop-blur-2xl px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4 transition-all duration-700 hover:shadow-2xl">
                            <div className="rounded-3xl w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] flex justify-center items-center overflow-hidden">
                                <Globe
                                    height={window.innerWidth < 640 ? 200 : window.innerWidth < 768 ? 250 : 350}
                                    width={window.innerWidth < 640 ? 200 : window.innerWidth < 768 ? 250 : 350}
                                    backgroundColor="rgba(0, 0, 0, 0)"
                                    backgroundImageOpacity={0.6}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bangalore, India', color: '#4A9EFF', size: 15 }]}
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-2 sm:mb-3">
                                    Global Collaboration
                                </p>
                                <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-4 sm:mb-6 flex-1">
                                    Based in Bangalore, India, I'm highly adaptable to different time zones and excel in remote collaboration worldwide.
                                </p>
                                <Button name="Let's Connect" isBeam containerClass="w-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Passion Box */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-2">
                        <div className="group w-full h-full ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-bl from-black-100/90 via-black-200/90 to-black-300/90 rounded-2xl backdrop-blur-2xl px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4 transition-all duration-700 hover:shadow-2xl">
                            <div className="relative overflow-hidden rounded-xl flex-1 min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">
                                <img 
                                    src="assets/grid3.png" 
                                    alt="Coding passion" 
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="pt-2 sm:pt-4">
                                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-2 sm:mb-3">
                                    Passion for Innovation
                                </p>
                                <p className="text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                                    Coding isn't just my profession—it's my passion. I thrive on solving complex problems, 
                                    exploring cutting-edge technologies, and transforming ideas into elegant digital solutions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Personal Introduction Section */}
                <motion.div variants={itemVariants} className="mt-8 sm:mt-12 md:mt-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="ring-1 ring-white/10 bg-gradient-to-r from-black-200/80 to-black-300/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-8 sm:py-12 md:px-12 md:py-16">
                            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
                                <motion.div 
                                    className="flex-shrink-0"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-sm"
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                opacity: [0.3, 0.5, 0.3]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        <img 
                                            src="/heroImage.jpg" 
                                            alt="Yaswanth" 
                                            className="relative z-10 w-full h-full object-cover rounded-2xl ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300" 
                                        />
                                    </div>
                                </motion.div>
                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent mb-3 sm:mb-4">
                                        Hi, I'm Yaswanth Sai Vendra
                                    </h2>
                                    <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                        A passionate full-stack developer with 4+ years of experience crafting dynamic web and mobile applications. 
                                        I excel in both frontend artistry and backend architecture, bringing ideas to life through clean, 
                                        efficient code and thoughtful user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About; 