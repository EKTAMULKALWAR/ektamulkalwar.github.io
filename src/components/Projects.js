import React from 'react';
import research from '../assests/research.png';
import ios from '../assests/ios.png';
import fashion from '../assests/fashion.png';



const Projects = () => (
  <section id="projects" className="py-20 bg-black text-white z-20">
  {/* Title and Underline */}
  <h2 className="text-4xl font-bold -mb-3 text-center text-white z-30">Projects</h2>
  <div className="h-3 w-24 bg-red-500 mb-20 mx-auto z-30"></div>

  {/* Wrapper for Project Cards */}
  <div className="max-w-7xl mx-auto space-y-40">
    
    {/* Project 1 */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Project Image with Background Color */}
      <div className="relative flex items-start h-[400px]">
        <div className="absolute top-1/2 transform -translate-y-1/2 -left-10 w-[150%] h-[160%] bg-blue-800 -ml-30"></div>
        
        <img
          src={research}  // Make sure 'research' is correctly imported and the path is valid
          alt="Project Screenshot"
          className="relative z-10 h-auto"
          style={{ width: 'calc(100% + 12px)', marginLeft: '-30px' }}
        />
      </div>
      
      {/* Right Column: Project Description */}
      <div className="space-y-2 z-20">
        <h3 className="text-4xl font-bold text-white">
          Decentralized Certificate Verification Application via Blockchain
        </h3>
        <p className="text-lg text-gray-300">
        This review explores a decentralized certificate verification system using blockchain technology to ensure secure, tamper-resistant authentication of digital certificates. By leveraging a distributed ledger and cryptographic security, this approach addresses forgery risks and enhances trust in online certifications.        </p>
        <a
          href="https://thegrenze.com/index.php?display=page&view=journalabstract&absid=1770&id=8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-xl font-semibold underline transition-colors duration-200 hover:text-red-400"
        >
          PDF
        </a>
      </div>
    </div>

    {/* Spacer to push Project 2 to the next "page" */}
    <div className="h-10"></div>

    {/* Project 2 */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Right Column: Project Image with Background Color */}
      <div className="relative flex items-start h-[400px] justify-end">
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-[150%] h-[160%] bg-blue-800"
          style={{ right: '-120%' }}
        ></div>
        
        <img
          src={ios}  // Ensure 'ios' is correctly imported and the path is valid
          alt="Project Screenshot"
          className="relative z-10 h-auto"
          style={{ width: 'calc(100% + 12px)', marginRight: '-700px' }}
        />
      </div>
      
      {/* Left Column: Project Description */}
      <div className="col-span-1 space-y-4 z-20 max-w-lg lg:ml-[-500px] text-left">
        <h3 className="text-4xl font-bold text-white">
          iOS Landmark Application
        </h3>
        <p className="text-lg text-gray-300">
          An interactive iOS application built with SwiftUI showcasing various landmarks with beautiful images and descriptions.
        </p>
        <a
          href="https://github.com/EKTAMULKALWAR/landmark-iOS-App"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-xl font-semibold underline transition-colors duration-200 hover:text-red-400"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* Spacer to push Project 3 to the next "page" */}
    <div className="h-10"></div>

    {/* Project 3 */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Project Image with Background Color */}
      <div className="relative flex items-start h-[400px]">
        <div className="absolute top-1/2 transform -translate-y-1/2 -left-10 w-[150%] h-[160%] bg-blue-800 -ml-30"></div>
        
        <img
          src={fashion}  // Ensure 'fashion' is correctly imported and the path is valid
          alt="Project Screenshot"
          className="relative z-10 h-auto"
          style={{ width: 'calc(100% + 12px)', marginLeft: '-30px' }}
        />
      </div>
      
      {/* Right Column: Project Description */}
      <div className="space-y-2 z-20">
        <h3 className="text-4xl font-bold text-white">
          Fashion and Apparel Classification
        </h3>
        <p className="text-lg text-gray-300">
          Developed a deep learning model with Python and FastAPI, achieving 85% accuracy in image classification. Published with the Copyright Office India.
        </p>
        <a
          href="/ml.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-xl font-semibold underline transition-colors duration-200 hover:text-red-400"
        >
          PDF
        </a>
      </div>
    </div>
  </div>
</section>

);

export default Projects;
