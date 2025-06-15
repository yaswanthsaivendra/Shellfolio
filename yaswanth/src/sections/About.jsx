import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import Skills from '../components/Skills.jsx';
import Background from '../components/Background.jsx';

const About = () => {

  return (
    <section className="min-h-screen py-16 w-full relative overflow-hidden" id="about">
      <Background variant="about" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-4">
        {/* First Box */}
        <div className="lg:col-span-1">
          <div className="w-full h-full border border-white/10 bg-gradient-to-br from-black-200/90 via-black-300/90 to-black-200/90 rounded-xl backdrop-blur-sm px-6 py-4 flex flex-col gap-3 hover:border-primary/30 transition-all duration-300">
            <img src="/avatar.png" alt="grid-1" className="w-full sm:h-[240px] h-fit object-contain hover:scale-105 transition-transform duration-300" />
            <div>
              <p className="text-2xl font-bold bg-gradient-to-r from-white to-tertiary bg-clip-text text-transparent">Hi, I&apos;m Yaswanth</p>
              <p className="text-white-600 text-sm mt-2">
                With 4 years of experience, I specialize in developing dynamic web and mobile apps, excelling in both frontend and backend.
              </p>
            </div>
          </div>
        </div>

        {/* Second Box */}
        <div className="lg:col-span-1">
          <div className="w-full h-full border border-white/10 bg-gradient-to-br from-black-200/90 via-black-300/90 to-black-200/90 rounded-xl backdrop-blur-sm px-6 py-4 flex flex-col gap-3 hover:border-primary/30 transition-all duration-300">
            <div className="w-full sm:h-[240px] h-fit object-contain flex flex-col items-center justify-center">
              <Skills />
            </div>
            <div>
              <p className="text-2xl font-bold bg-gradient-to-r from-white to-tertiary bg-clip-text text-transparent">Tech Stack</p>
              <p className="text-white-600 text-sm mt-2">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        {/* Third Box */}
        <div className="lg:col-span-1 lg:row-span-2">
          <div className="w-full h-full border border-white/10 bg-gradient-to-br from-black-100/90 via-black-200/90 to-black-300/90 rounded-lg px-4 py-3 flex flex-col gap-2 hover:border-primary/30 transition-all duration-300">
            <div className="rounded-3xl w-full sm:h-[260px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bangalore, India', color: '#4A9EFF', size: 15 }]}
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">I&apos;m very flexible with time zone communications & locations</p>
              <p className="text-white-600 text-sm mt-2">I&apos;m based in Bangalore, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="lg:col-span-2 lg:row-span-2">
          <div className="w-full h-full border border-white/10 bg-gradient-to-bl from-black-100/90 via-black-200/90 to-black-300/90 rounded-lg px-4 py-3 flex flex-col gap-2 hover:border-primary/30 transition-all duration-300">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[260px] h-fit object-contain" />
            <div>
              <p className="text-2xl font-bold text-white">My Passion for Coding</p>
              <p className="text-white-600 text-sm mt-2">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Box */}
        <div className="lg:col-span-1">
          <div className="w-full h-full border border-white/10 bg-gradient-to-r from-black-100/90 via-black-200/90 to-black-300/90 rounded-lg px-4 py-3 flex flex-col gap-2 hover:border-primary/30 transition-all duration-300">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[146px] sm:h-[240px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-2xl font-bold text-white">Code Quality Focus</p>
              <p className="text-white-600 text-sm">
                I consistently deliver clean, maintainable code while ensuring efficient delivery and practical solutions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;