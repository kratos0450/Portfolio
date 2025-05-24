import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImg from '../assets/profile_image.jpg';      // Your image
import resumePDF from "../assets/Resume-C.pdf";        // Your resume

const Hero = ({ isDarkMode, scrollToSection }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            {/* Profile Image */}
            <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center mb-6`}>
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Praveen S
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
              AI Engineer and Data Analyst
            </h2>

            {/* Bio */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              AI & Data Science student with expertise in machine learning, data analytics, and AI-driven solutions. 
              Passionate about solving real-world problems through data-driven insights.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Download Resume */}
            <a
              href={resumePDF}
              download="Praveen_S_Resume.pdf"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>

            {/* Contact Me */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/tech-no-guy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/praveen-sivanandham-8a38762b0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:spraveen0450@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
