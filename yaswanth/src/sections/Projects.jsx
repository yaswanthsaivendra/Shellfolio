import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { myProjects } from '../constants/index.js';
import { SiNextdotjs, SiDjango, SiTailwindcss, SiFlask, SiTypescript, SiCelery } from "react-icons/si"; 
import { FaAws, FaDocker, FaNode, FaReact, FaPython } from "react-icons/fa";
import Background from '../components/Background';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  const getIconComponent = (iconName) => {
    const icons = {
      SiNextdotjs,
      SiDjango,
      SiTailwindcss,
      SiFlask,
      SiTypescript,
      FaAws,
      FaDocker,
      SiCelery,
      FaNode,
      FaReact,
      FaPython
    };
    return icons[iconName];
  };

  const getIconColor = (iconName) => {
    const colors = {
      SiNextdotjs: '#FFFFFF',
      SiDjango: '#0F7B3C',
      SiTailwindcss: '#38BDF8',
      SiFlask: '#FFFFFF',
      SiTypescript: '#3178C6',
      FaAws: '#FF9900',
      FaDocker: '#2496ED',
      SiCelery: '#37814A',
      FaNode: '#68A063',
      FaReact: '#61DAFB',
      FaPython: '#FFD43B'
    };
    return colors[iconName] || '#FFFFFF';
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <Background variant="projects" />
      <div className="max-w-6xl mx-auto c-space">
        <div className="flex flex-col items-center mb-16">
          <h2 className="head-text text-center">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        <div className="bg-gradient-to-br from-black-200/90 to-black-300/90 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300">
          {/* Project Navigation */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold animatedText bg-clip-text text-transparent bg-gradient-to-r from-white to-tertiary">
                {currentProject.title}
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
            </div>
            <div className="flex gap-4">
              <button 
                className="arrow-btn group" 
                onClick={() => handleNavigation('previous')}
              >
                <img src="/assets/left-arrow.png" alt="previous" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                className="arrow-btn group" 
                onClick={() => handleNavigation('next')}
              >
                <img src="/assets/right-arrow.png" alt="next" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Project Content */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Project Image */}
            <div className="relative group">
              <div className="relative aspect-video rounded-xl overflow-hidden ring-2 ring-primary/20 shadow-xl hover:ring-primary/40 transition-all">
                <img 
                  src={currentProject.spotlight} 
                  alt={currentProject.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-white-700 animatedText leading-relaxed">{currentProject.desc}</p>
                <p className="text-white-600 animatedText mt-4">{currentProject.subdesc}</p>
              </div>

              <div className="flex flex-col gap-6 pt-6 border-t border-primary/20">
                <div className="flex flex-wrap gap-3">
                  {currentProject.tags.map((tag, index) => {
                    const IconComponent = getIconComponent(tag.icon);
                    return (
                      <div 
                        key={index} 
                        className="tech-logo group"
                        title={tag.name}
                      >
                        <IconComponent 
                          className="w-6 h-6 group-hover:scale-110 transition-transform" 
                          style={{ color: getIconColor(tag.icon) }}
                        />
                      </div>
                    );
                  })}
                </div>

                <a
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all group w-full sm:w-auto"
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-base font-medium">View Live Project</span>
                  <img 
                    src="/assets/arrow-up.png" 
                    alt="arrow" 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black-300/60 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-white-600">
              Project {selectedProjectIndex + 1} of {projectCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;