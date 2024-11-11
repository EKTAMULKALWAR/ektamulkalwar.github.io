import React from 'react';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

const Home = () => {
  return (
    <div>
      {/* About Me Section */}
      <section id="about" className="py-20 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center transform transition duration-500 hover:scale-105">
      <h1 className="text-5xl font-extrabold mb-4">Hello, I'm Ekta</h1>
       <p className="text-lg max-w-2xl mx-auto leading-relaxed">I am a passionate software developer focused on building user-centered applications...</p>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
        <h2 className="text-4xl font-bold mb-10 text-center">My Professional Experience</h2>
        <div className="space-y-10 max-w-2xl w-full">
          <div className="experience-item bg-white shadow-lg rounded-lg p-6 transition hover:bg-gray-50">
            <h3 className="text-2xl font-semibold">Research Assistant at Cal State LA</h3>
            <p className="mt-1 text-gray-500 italic">April 2024 - Present</p>
            <p className="mt-2">Developed web applications, collaborated with cross-functional teams, and implemented new features using React, Node.js, and MongoDB.</p>
          </div>
          <div className="experience-item bg-white shadow-lg rounded-lg p-6 transition hover:bg-gray-50">
            <h3 className="text-2xl font-semibold">Teaching Associate at Cal State LA</h3>
            <p className="mt-1 text-gray-500 italic">Aug 2024 - Present</p>
            <p className="mt-2">Supported student learning, contributed to curriculum development, and fostered an interactive learning environment.</p>
          </div>
          <div className="experience-item bg-white shadow-lg rounded-lg p-6 transition hover:bg-gray-50">
            <h3 className="text-2xl font-semibold">UI/UX Designing Intern</h3>
            <p className="mt-1 text-gray-500 italic">Jan 2023 - July 2023</p>
            <p className="mt-2">Assisted in designing internal tools and applications, improving UI for better user experiences using Figma and React.js.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-white p-6">
        <h2 className="text-4xl font-bold mb-10 text-center">My Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {ProjectList.map((project, idx) => (
            <ProjectItem
              key={idx}
              name={project.name}
              image={project.image}
              description={project.description}
              className="transform transition duration-500 hover:scale-105"
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-200 text-gray-800 p-6">
        <div className="text-center max-w-md w-full">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
