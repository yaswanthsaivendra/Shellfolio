import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { myProjects } from '../constants/index.js';
import { SiNextdotjs, SiDjango, SiTailwindcss, SiFlask, SiTypescript, SiCelery, SiPolygon, SiSolidity, SiEthereum } from "react-icons/si"; 
import { FaAws, FaDocker, FaNode, FaReact, FaPython, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaGithub, FaEye } from "react-icons/fa";
import Background from '../components/Background';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [cardStack, setCardStack] = useState([...myProjects]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleCardSwipe = (direction) => {
    if (direction === 'dismiss') {
      // Move current card to back of stack
      setCardStack(prev => [...prev.slice(1), prev[0]]);
    }
  };

  const goToProject = (index) => {
    setSelectedProjectIndex(index);
  };

  const getIconComponent = (iconName) => {
    const icons = {
      SiNextdotjs, SiDjango, SiTailwindcss, SiFlask, SiTypescript,
      FaAws, FaDocker, SiCelery, FaNode, FaReact, FaPython,
      SiPolygon, SiSolidity, SiEthereum
    };
    return icons[iconName];
  };

  const getIconColor = (iconName) => {
    const colors = {
      SiNextdotjs: '#FFFFFF', SiDjango: '#0F7B3C', SiTailwindcss: '#8B5CF6',
      SiFlask: '#FFFFFF', SiTypescript: '#6366F1', FaAws: '#FF9900',
      FaDocker: '#8B5CF6', SiCelery: '#37814A', FaNode: '#68A063',
      FaReact: '#8B5CF6', FaPython: '#FFD43B', SiPolygon: '#8247E5',
      SiSolidity: '#6366F1', SiEthereum: '#8B5CF6'
    };
    return colors[iconName] || '#FFFFFF';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handleNavigation('previous');
      } else if (e.key === 'ArrowRight') {
        handleNavigation('next');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const currentProject = myProjects[selectedProjectIndex];

  // Mini Project Card Component for Desktop
  const MiniProjectCard = ({ project, index, isActive, onClick }) => (
    <motion.div
      onClick={() => onClick(index)}
      className={`group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
        isActive 
          ? 'ring-2 ring-primary/60 shadow-xl shadow-primary/25' 
          : 'ring-1 ring-white/10 hover:ring-white/20 hover:shadow-lg'
      }`}
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="aspect-video relative overflow-hidden">
        <motion.img 
          src={project.spotlight} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-1 tracking-wide">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.tags.slice(0, 3).map((tag, idx) => {
              const IconComponent = getIconComponent(tag.icon);
              return (
                <div key={idx} className="flex items-center justify-center w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm">
                  <IconComponent
                    className="w-3 h-3"
                    style={{ color: getIconColor(tag.icon) }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Featured Project Card Component
  const FeaturedProjectCard = ({ project, className = "" }) => (
    <motion.div
      className={`group bg-gradient-to-br from-black-200/90 to-black-300/90 backdrop-blur-2xl rounded-3xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all duration-700 shadow-2xl hover:shadow-3xl ${className}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
        <motion.img
          src={project.spotlight}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
                            <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent backdrop-blur-md text-white rounded-2xl hover:from-accent hover:to-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </motion.a>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h2>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-8">
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-3 font-light">
          {project.desc}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag, index) => {
            const IconComponent = getIconComponent(tag.icon);
            return (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-black-300/80 backdrop-blur-md px-4 py-2.5 rounded-xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <IconComponent
                  className="w-4 h-4"
                  style={{ color: getIconColor(tag.icon) }}
                />
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  {tag.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  // Card Stack Item for Mobile
  const CardStackItem = ({ project, index, onSwipe }) => (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.15}
      onDragEnd={(event, info) => {
        const threshold = 120;
        if (Math.abs(info.offset.x) > threshold) {
          onSwipe('dismiss');
        }
      }}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ zIndex: cardStack.length - index }}
      initial={{ 
        scale: 1 - index * 0.04,
        y: index * 8,
        opacity: index < 3 ? 1 - index * 0.15 : 0
      }}
      animate={{ 
        scale: 1 - index * 0.04,
        y: index * 8,
        opacity: index < 3 ? 1 - index * 0.15 : 0
      }}
      whileDrag={{ scale: 1.05, rotate: 3, zIndex: 100 }}
      exit={{ 
        x: 400, 
        opacity: 0,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
    >
      <FeaturedProjectCard project={project} />
    </motion.div>
  );

  return (
    <div className="min-h-screen w-full relative overflow-hidden pt-20 md:pt-24 pb-20 md:pb-12">
      <Background variant="projects" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-8 md:py-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-generalsans mb-4 tracking-tight">
            Featured Projects
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {isDesktop ? 'Explore my latest work and creative solutions' : 'Discover projects with intuitive swipe gestures'}
          </p>
        </motion.div>

        {/* Desktop: Side-by-Side View */}
        {isDesktop && (
          <motion.div variants={itemVariants} className="grid lg:grid-cols-5 gap-8">
            {/* Featured Project - Takes 3 columns */}
            <div className="lg:col-span-3">
              <FeaturedProjectCard project={currentProject} />
            </div>

            {/* Project Grid - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-white font-semibold text-xl mb-6 tracking-wide">All Projects</h3>
              <div className="grid grid-cols-1 gap-4 max-h-[700px] overflow-y-auto pr-3 custom-scrollbar">
                {myProjects.map((project, index) => (
                  <MiniProjectCard
                    key={index}
                    project={project}
                    index={index}
                    isActive={index === selectedProjectIndex}
                    onClick={goToProject}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile: Card Stack Interface */}
        {!isDesktop && (
          <motion.div variants={itemVariants} className="relative h-[520px] max-w-sm mx-auto">
            <AnimatePresence>
              {cardStack.map((project, index) => (
                <CardStackItem
                  key={`${project.title}-${index}`}
                  project={project}
                  index={index}
                  onSwipe={handleCardSwipe}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Navigation Dots - Desktop Only */}
        {isDesktop && (
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-4 mt-12"
          >
            {myProjects.map((_, index) => (
                              <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`relative transition-all duration-500 ${
                    index === selectedProjectIndex
                      ? 'w-10 h-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/30'
                      : 'w-3 h-3 bg-white/20 rounded-full hover:bg-white/40'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === selectedProjectIndex && (
                    <motion.div
                      layoutId="activeProject"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/30"
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    />
                  )}
                </motion.button>
            ))}
          </motion.div>
        )}

        {/* Project Counter */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-black-300/60 backdrop-blur-xl rounded-2xl ring-1 ring-white/10">
            <span className="text-sm font-medium text-white/80 tracking-wide">
              {isDesktop 
                ? `${selectedProjectIndex + 1} of ${myProjects.length} Projects`
                : `${cardStack.length} Projects Remaining`
              }
            </span>
          </div>
        </motion.div>

        {/* Hints */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center gap-6 mt-8 px-4"
        >
          {isDesktop ? (
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="flex gap-2">
                  <kbd className="px-3 py-2 bg-black-300/80 backdrop-blur-md rounded-lg text-xs ring-1 ring-white/10 font-medium">←</kbd>
                  <kbd className="px-3 py-2 bg-black-300/80 backdrop-blur-md rounded-lg text-xs ring-1 ring-white/10 font-medium">→</kbd>
                </div>
                <span className="font-light tracking-wide">Navigate projects</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <FaEye className="w-4 h-4" />
                <span className="font-light tracking-wide">Click thumbnails to preview</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <div className="w-10 h-1.5 bg-white/15 rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  animate={{ x: [-40, 40, -40] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="font-light tracking-wide">Swipe cards to explore</span>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.4);
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Projects; 