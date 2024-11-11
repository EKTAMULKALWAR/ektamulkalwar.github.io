import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const particlesInit = async (main) => {
  await loadFull(main);
};

const Experience = () => (
  <>
    {/* Particles Background */}
    <Particles
      id="tsparticles-experience"
      init={particlesInit}
      options={{
        background: { color: { value: "#000" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
          collisions: { enable: true },
          move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 2 },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />

    {/* Experience Content */}
    <h2 className="text-5xl font-bold -mb-3 text-center text-white">Experience</h2>
    <div className="h-3 w-48 bg-red-500 mb-20 mx-auto"></div> {/* Increased width to make it broader */}
    
    {/* Vertical Line and Experience Cards Container */}
    <div className="relative flex">
      {/* Single Vertical Line */}
      <div className="absolute top-0 left-0 h-full w-1 bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

      <div className="space-y-10 max-w-3xl mx-auto pl-6 group">
        {/* Experience Card */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-transparent hover:border-red-500">
          <h3 className="text-2xl mb-1 text-white-400">Teaching Associate at Cal State LA</h3>
          <p className="text-sm text-gray-600 italic mb-2">August 2024 - Present</p>
          <ul className="text-sm text-gray-400 list-disc list-inside ml-4">
            <li>Developed the API backend using Node.JS to manage real-time data for optimizing evacuation routes.</li>
            <li>Integrated Google Maps API and TomTom API for dynamic, data-driven route suggestions.</li>
            <li>Collaborated with a team to predict vehicle speeds, enhancing traffic flow predictions.</li>
          </ul>
        </div>

        {/* Another Experience Card */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-transparent hover:border-red-500">
          <h3 className="text-2xl mb-1 text-white-400">Graduate Research Assistant</h3>
          <p className="text-sm text-gray-600 italic mb-2">April 2024 - Present</p>
          <ul className="text-sm text-gray-400 list-disc list-inside ml-4">
            <li>Developed API backend to manage real-time data for emergency evacuation optimization.</li>
            <li>Integrated Google Maps API and TomTom API for route suggestions.</li>
            <li>Collaborated on predictive models to manage traffic flow.</li>
          </ul>
        </div>
        
        {/* UI/UX Design Intern Experience */}
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-transparent hover:border-red-500">
          <h3 className="text-2xl mb-1 text-white-400">UI/UX Designing Intern</h3>
          <p className="text-sm text-gray-600 italic mb-2">March 2023 - July 2023</p>
          <p className="text-lg text-gray-400 mb-2">Cling MultiSolution Pvt. Ltd | Pune, India</p>
          <ul className="text-sm text-gray-400 list-disc list-inside ml-4">
            <li>Designed and prototyped websites and applications using Figma.</li>
            <li>Assisted with front-end development using React.js.</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Experience;
