import { motion } from "framer-motion";
import Background from "../components/Background";

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/yaswanthsaivendra',
        icon: <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yaswanthvendra/',
        icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    },
    {
        name: 'X (Twitter)',
        url: 'https://x.com/Yash0x01',
        icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    }
];

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

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
        <section id="home" className="pt-32 md:mt-0 min-h-screen w-full flex items-center justify-center relative overflow-hidden">
            <Background />
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-16 max-w-7xl mx-auto w-full px-4"
            >
                <motion.a 
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img
                        src="/logo.png"
                        alt="logo"
                        width={80}
                        height={80}
                        className="h-20"
                    />
                </motion.a>
            </motion.div>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto max-w-7xl px-4 py-16 flex lg:flex-row flex-col items-center gap-12 relative z-10"
            >
                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    className="lg:w-1/2 flex flex-col gap-6"
                >
                    <motion.div variants={itemVariants} className="flex flex-col gap-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-generalsans text-center lg:text-left">
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
                        <p className="text-gray-400 text-lg md:text-xl text-center lg:text-left">
                            A passionate developer specializing in Full Stack Web & Mobile Development, 
                            with a deep interest in Web3 and Blockchain technologies
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap justify-center lg:justify-start gap-3 text-gray-300"
                    >
                        {["Full Stack Development", "Mobile Apps", "Web3", "Blockchain"].map((skill, index) => (
                            <motion.span 
                                key={skill}
                                className="px-4 py-2 bg-black-300/50 backdrop-blur-sm rounded-full text-sm md:text-base"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
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
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(var(--primary))" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium transition-all w-full sm:w-auto text-center"
                        >
                            Let&apos;s Connect
                        </motion.button>
                        <motion.button
                            onClick={scrollToProjects}
                            whileHover={{ scale: 1.05, borderColor: "rgb(var(--primary))" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-gray-600 rounded-full text-white font-medium transition-all backdrop-blur-sm w-full sm:w-auto text-center"
                        >
                            View Projects
                        </motion.button>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="flex justify-center lg:justify-start gap-8 mt-4"
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
                                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black-300/90 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100"
                                    initial={{ y: 10 }}
                                    whileHover={{ y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.name}
                                </motion.div>
                                <motion.div 
                                    className="p-3 rounded-full bg-black-300/30 backdrop-blur-sm border border-gray-700/30 hover:border-primary"
                                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
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
                    className="lg:w-1/2 flex flex-col gap-6"
                >
                    <motion.h2 
                        variants={itemVariants}
                        className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary"
                    >
                        I help people and businesses build innovative digital solutions
                    </motion.h2>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-400 text-lg"
                    >
                        From concept to deployment, I bring ideas to life using cutting-edge technologies
                        and best development practices. Let&apos;s work together to create something amazing.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="mt-4 p-6 bg-black-300/30 backdrop-blur-sm rounded-2xl border border-gray-700/30"
                    >
                        <code className="text-primary">
                            const developer = &#123;<br/>
                            &nbsp;&nbsp;name: &quot;Yaswanth&quot;,<br/>
                            &nbsp;&nbsp;skills: [&quot;Full Stack&quot;, &quot;Mobile&quot;, &quot;Web3&quot;],<br/>
                            &nbsp;&nbsp;passion: &quot;Building innovative solutions&quot;<br/>   
                            &#125;
                        </code>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero