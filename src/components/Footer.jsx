import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-6 text-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-3">
          <p className="text-lg font-semibold">Praveen S</p>
          <div className="flex space-x-6">
            <a href="https://github.com/tech-no-guy" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-blue-600 transition duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/praveen-sivanandham-8a38762b0" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-blue-700 transition duration-200" />
            </a>
            <a href="mailto:spraveen0450@gmail.com">
              <Mail className="hover:text-red-500 transition duration-200" />
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Praveen S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
