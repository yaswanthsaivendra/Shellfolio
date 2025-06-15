import { motion } from "framer-motion";
import Background from "../components/Background";

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/yaswanthsaivendra',
        icon: <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    },
    {
        name: 'X (Twitter)',
        url: 'https://x.com/Yash0x01',
        icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    }
];

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20 md:pt-0 pb-20 md:pb-0">
            <Background />
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto max-w-7xl px-4 py-8 md:py-16 flex lg:flex-row flex-col items-center gap-8 md:gap-12 relative z-10"
            >
                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    className="lg:w-1/2 flex flex-col gap-4 md:gap-6"
                >
                    <motion.div variants={itemVariants} className="flex flex-col gap-3 md:gap-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-generalsans text-center lg:text-left">
                            Hi, I am Yaswanth <motion.span 
                                className="waving-hand inline-block"
                                animate={{ 
                                    rotate: [0, 20, -20, 20, 0],
                                    transition: { 
                                        duration: 1.5, 
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    }
                                }}
                            >👋</motion.span>
                        </h1>
                        <p className="text-white-600 text-base md:text-lg lg:text-xl text-center lg:text-left">
                            A passionate developer specializing in Full Stack Web & Mobile Development, 
                            with a deep interest in Web3 and Blockchain technologies
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 text-white-700"
                    >
                        {["Full Stack Development", "Mobile Apps", "Web3", "Blockchain"].map((skill, index) => (
                            <motion.span 
                                key={skill}
                                className="px-3 md:px-4 py-1.5 md:py-2 bg-black-300/60 backdrop-blur-sm rounded-full text-xs md:text-sm lg:text-base border border-primary/20"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(74,144,226,0.1)", borderColor: "rgba(74,144,226,0.4)" }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>



                    <motion.div 
                        variants={itemVariants}
                        className="flex justify-center lg:justify-start gap-6 md:gap-8 mt-2 md:mt-4"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <motion.div 
                                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black-300/90 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 border border-primary/20"
                                    initial={{ y: 10 }}
                                    whileHover={{ y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.name}
                                </motion.div>
                                <motion.div 
                                    className="p-2.5 md:p-3 rounded-full bg-black-300/40 backdrop-blur-sm border border-primary/20 hover:border-primary/50"
                                    whileHover={{ backgroundColor: "rgba(74,144,226,0.1)" }}
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white-500 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        {link.icon}
                                    </svg>
                                </motion.div>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    variants={containerVariants}
                    className="lg:w-1/2 flex flex-col gap-4 md:gap-6"
                >
                    <motion.div 
                        variants={itemVariants}
                        className="relative group mb-4 md:mb-6"
                    >
                        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.img
                                src="/heroImage.jpg"
                                alt="Yaswanth"
                                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                    
                    <motion.h2 
                        variants={itemVariants}
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-tertiary text-center lg:text-left"
                    >
                        I help people and businesses build innovative digital solutions
                    </motion.h2>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-white-600 text-base md:text-lg text-center lg:text-left"
                    >
                        From concept to deployment, I bring ideas to life using cutting-edge technologies
                        and best development practices. Let&apos;s work together to create something amazing.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home; 