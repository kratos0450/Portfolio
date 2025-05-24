import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'Pollution Detector using ML and IoT',
      description: 'Environmental monitoring system combining machine learning algorithms with IoT sensors to detect and predict pollution levels in real-time.',
      tech: ['Python', 'Machine Learning', 'IoT', 'TensorFlow'],
      category: 'AI/ML'
    },
    {
      title: 'Inscription Translator using Deep Learning',
      description: 'Advanced OCR and translation system using deep learning to automatically recognize and translate ancient inscriptions and texts.',
      tech: ['Python', 'Deep Learning', 'PyTorch', 'Computer Vision'],
      category: 'AI/ML'
    },
    {
      title: 'Attendance Management System using Blockchain',
      description: 'Secure and transparent attendance tracking system leveraging blockchain technology to ensure data integrity and prevent tampering.',
      tech: ['Blockchain', 'Smart Contracts', 'JavaScript', 'Web3'],
      category: 'Blockchain'
    },
    {
      title: 'AURCC Hostel Management Website',
      description: 'Full-stack web application for hostel management featuring room allocation, student registration, and administrative tools.',
      tech: ['React JS', 'JavaScript', 'Node.js', 'Database'],
      category: 'Web Development'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 group`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.category === 'AI/ML' ? 'bg-blue-100 text-blue-800' :
                  project.category === 'Blockchain' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {project.category}
                </span>
                <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={`px-2 py-1 rounded text-xs font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;