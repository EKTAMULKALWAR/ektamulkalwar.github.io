import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Footer from './components/Footer'; // Import the footer component

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Global Particles Background */}
      <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: {
      color: { value: "#000" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        push: { quantity: 6 },
        grab: { distance: 200, line_linked: { opacity: 0.3 } },
      },
    },
    particles: {
      color: { value: ["#ffffff", "#ff3cac", "#78c0e0", "#ff9a9e"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 900 }, value: 90 },
      opacity: {
        value: 0.7,
        anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
      },
      shape: {
        type: ["circle", "star", "triangle"],
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      size: {
        value: { min: 2, max: 5 },
        anim: { enable: true, speed: 3, size_min: 1, sync: false },
      },
    },
    detectRetina: true,
  }}
  className="absolute inset-0 -z-10"
/>


      {/* Main Sections */}
      <HeroSection />
      <About /> {/* This will now include Experience, Projects, and Contact sections */}
      <Footer />
    </div>
  );
}

export default App;
