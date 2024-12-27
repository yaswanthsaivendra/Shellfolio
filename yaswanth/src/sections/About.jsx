import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import Skills from '../components/Skills.jsx';
import Background from '../components/Background.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('yaswanthsaivendra@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen py-16 w-full relative overflow-hidden" id="about">
      <Background variant="about" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-4">
        {/* First Box */}
        <div className="lg:col-span-1">
          <div className="w-full h-full border border-white/10 bg-gradient-to-br from-[#0f1b2d]/80 via-[#162a47]/80 to-[#0a1624]/80 rounded-xl backdrop-blur-sm px-6 py-4 flex flex-col gap-3 hover:border-white/20 transition-all duration-300">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[240px] h-fit object-contain hover:scale-105 transition-transform duration-300" />
            <div>
              <p className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Hi, I&apos;m Yaswanth</p>
              <p className="text-gray-300 text-sm mt-2">
                With 4 years of experience, I specialize in developing dynamic web and mobile apps, excelling in both frontend and backend.
              </p>
            </div>
          </div>
        </div>

        {/* Second Box */}
        <div className="lg:col-span-1">
          <div className="w-full h-full border border-white/10 bg-gradient-to-br from-[#0f1b2d]/80 via-[#162a47]/80 to-[#0a1624]/80 rounded-xl backdrop-blur-sm px-6 py-4 flex flex-col gap-3 hover:border-white/20 transition-all duration-300">
            <div className="w-full sm:h-[240px] h-fit object-contain flex flex-col items-center justify-center">
              <Skills />
            </div>
            <div>
              <p className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Tech Stack</p>
              <p className="text-gray-300 text-sm mt-2">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        {/* Third Box */}
        <div className="lg:col-span-1 lg:row-span-2">
          <div className="w-full h-full border border-black-300 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#0d1a29] via-[#1c2f45] to-[#0a1624] rounded-lg px-4 py-3 flex flex-col gap-2">
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
                labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bangalore, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">I&apos;m very flexible with time zone communications & locations</p>
              <p className="text-gray-300 text-sm mt-2">I&apos;m based in Bangalore, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="lg:col-span-2 lg:row-span-2">
          <div className="w-full h-full border border-black-300 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#0e1c2c] via-[#1b2e43] to-[#0a1624] rounded-lg px-4 py-3 flex flex-col gap-2">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[260px] h-fit object-contain" />
            <div>
              <p className="text-2xl font-bold text-white">My Passion for Coding</p>
              <p className="text-gray-300 text-sm mt-2">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Box */}
        <div className="lg:col-span-1">
          <div className="w-full h-full border border-black-300 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0c1825] via-[#192b40] to-[#0a1624] rounded-lg px-4 py-3 flex flex-col gap-2">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[240px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-gray-300 text-center">Contact me</p>
              <div className="flex items-center gap-2 cursor-pointer bg-black/20 p-2 rounded-lg" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-6 h-6" />
                <p className="text-lg md:text-xl font-medium text-white">yaswanthsaivendra@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;