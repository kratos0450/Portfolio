import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Passionate AI & Data Science Student</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing B.Tech in Artificial Intelligence and Data Science at Anna University Regional Campus Coimbatore. 
              I specialize in developing intelligent solutions that bridge the gap between complex data and actionable insights.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My expertise spans across machine learning, data analytics, cybersecurity, and full-stack development. 
              I'm driven by the potential of AI to solve real-world challenges and create meaningful impact.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Languages</h4>
                <ul className="text-gray-600">
                  <li>English</li>
                  <li>Tamil</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Focus Areas</h4>
                <ul className="text-gray-600">
                  <li>Machine Learning</li>
                  <li>Data Analytics</li>
                  <li>AI Solutions</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-xl`}>
            <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Current CGPA</span>
                <span className="font-semibold text-blue-600">8.4/10</span>
              </div>
              <div className="flex justify-between">
                <span>Projects Completed</span>
                <span className="font-semibold text-blue-600">4+</span>
              </div>
              <div className="flex justify-between">
                <span>Technologies Mastered</span>
                <span className="font-semibold text-blue-600">15+</span>
              </div>
              <div className="flex justify-between">
                <span>Years of Study</span>
                <span className="font-semibold text-blue-600">3+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;