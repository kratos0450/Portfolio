import React from 'react';

const Education = ({ isDarkMode }) => {
  return (
    <section id="education" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Bachelor's Degree */}
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2">B.Tech Artificial Intelligence and Data Science</h3>
                <p className="text-blue-600 font-medium">Anna University Regional Campus Coimbatore</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">CGPA: 8.4</p>
                <p className="text-gray-600">2022 - 2026</p>
              </div>
            </div>
            <p className="text-gray-600">
              Comprehensive program covering artificial intelligence, machine learning, data science, and software engineering principles. 
              Focus on practical applications and industry-relevant projects.
            </p>
          </div>

          {/* Higher Secondary */}
          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Higher Secondary Education</h3>
                <p className="text-blue-600 font-medium">E R Higher Secondary School, Trichy</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">Score: 95%</p>
                <p className="text-gray-600">2020 - 2022</p>
              </div>
            </div>
            <p className="text-gray-600">
              Exceptional performance in higher secondary education with focus on mathematics and science subjects, 
              building a strong foundation for engineering studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;