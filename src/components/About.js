import React, { useState, useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import cpp from '../assests/cpp.png';
import javascript from '../assests/js.jpeg';
import nodejs from '../assests/nodejs.png';
import swift from '../assests/swift.jpeg';
import django from '../assests/dj.png';
import figma from '../assests/figma.png';
import react from '../assests/react.png';
import mongo from '../assests/mogodb.png';

// Importing separate component files
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const About = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Adjusted to trigger when 50% of the section is visible
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  const getLinkClass = (section) => (activeSection === section ? 'text-red-500' : 'text-white');

  return (
    <div className="space-y-40">
      {/* Conditional Navbar */}
      {showNavbar && (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 p-4 z-20 transition-opacity duration-300">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">My Portfolio</h1>
            <div className="space-x-8">
              <a href="#about" className={`${getLinkClass('about')} hover:text-red-500`}>
                About
              </a>
              <a href="#experience" className={`${getLinkClass('experience')} hover:text-red-500`}>
                Experience
              </a>
              <a href="#projects" className={`${getLinkClass('projects')} hover:text-red-500`}>
                Projects
              </a>
              <a href="#contact" className={`${getLinkClass('contact')} hover:text-red-500`}>
                Contact
              </a>
            </div>
          </div>
        </nav>
      )}

      {/* Particles for background effect */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "#000" } },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.5 },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* About Section with Skills */}
      <section ref={aboutRef} id="about" className="min-h-screen flex flex-col items-center text-center p-6 bg-black text-white relative">
        <div className="mt-20 pt-10">
          <h1 className="text-5xl font-bold -mb-3 text-white">About</h1>
          <div className="h-3 w-24 bg-red-500 mb-10 mx-auto"></div>
        </div>

        <p className="text-lg max-w-2xl mx-auto mb-16 px-4 leading-relaxed">
        I’m a full-stack developer with a passion for creating seamless, engaging web experiences. JavaScript, React, and the intricacies of web development are my specialties, and I love the mix of creativity and logic they bring. I believe in life-long learning and constantly strive to expand my knowledge and skill set to stay ahead in the fast-evolving tech landscape.

Beyond the code, you’ll find me exploring new books, staying active, or strumming my guitar. I’m driven by curiosity and dedication, always looking to innovate and build projects that make a difference.        </p>

        {/* Skills Section */}
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto pb-20">
  {[
    { src: cpp, label: "C++" },
    { src: javascript, label: "JavaScript" },
    { src: swift, label: "Swift" },
    { src: nodejs, label: "Node.js" },
    { src: django, label: "Django" },
    { src: mongo, label: "MongoDB" },
    { src: react, label: "React.js" },
    { src: figma, label: "Figma" }
  ].map((skill, index) => (
    <div
      key={skill.label}
      className={`flex flex-col items-center justify-center transition-transform hover:scale-105
                  ${index >= 2 && index <= 5 ? 'col-span-1' : 'col-span-1'}`} 
    >
      <div
        className="w-32 h-32 flex items-center justify-center border border-transparent rounded-lg p-4 transition-all shadow-lg hover:shadow-xl"
        style={{
          borderImage: "linear-gradient(to bottom right, #ff3cac, #784ba0) 1",
          background: "rgba(255, 255, 255, 0.1)"
        }}
      >
        <img src={skill.src} alt={skill.label} className="w-20 h-20" />
      </div>
      <p className="mt-4 text-lg text-center font-semibold text-white">{skill.label}</p>
    </div>
  ))}
</div>

      </section>

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="min-h-screen p-6 bg-black text-white relative">
        <Experience />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="min-h-screen p-6 bg-black text-white relative">
        <Projects />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="min-h-screen p-6 bg-black text-white relative">
        <Contact />
      </section>
    </div>
  );
};

export default About;
