import React from 'react';

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-white">
    <h1 className="text-6xl md:text-7xl  text-center">
      Hello, I'm <span className="text-red-500">Ekta</span>.
    </h1>
    <h1 className="text-6xl md:text-7xl text-center">
      I'm a software developer.
    </h1>
    <a
      href="/resume.pdf"
      target="_blank"
      className="mt-8 px-6 py-3 border border-red-500 text-red-500 text-lg font-semibold rounded hover:bg-red-500 hover:text-white transition"
    >
      View my Resume
    </a>
  </section>
);

export default HeroSection;
