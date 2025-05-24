import React from 'react';
import { User, Code, Database, BookOpen, Wrench } from 'lucide-react';

const Skills = ({ isDarkMode }) => {
  const skills = {
    core: ['Data Analyst', 'Cyber Security', 'AI and ML', 'Software Development', 'Full Stack Development','Blockchain'],
    programming: ['Python', 'C', 'JavaScript', 'Kotlin', 'Rust', 'R'],
    database: ['PostgreSQL', 'MongoDB', 'Hadoop'],
    frameworks: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Flask', 'React JS'],
    tools: ['Power BI', 'Figma','Canva', 'Git', 'Android Studios', 'Blender']
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Skills */}
          <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <User className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Core Skills</h3>
            </div>
            <div className="space-y-2">
              {skills.core.map((skill, index) => (
                <div key={index} className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-sm`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <Code className="text-green-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <div className="space-y-2">
              {skills.programming.map((skill, index) => (
                <div key={index} className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-sm`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Database Management */}
          <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <Database className="text-purple-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Databases</h3>
            </div>
            <div className="space-y-2">
              {skills.database.map((skill, index) => (
                <div key={index} className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-sm`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2`}>
            <div className="flex items-center mb-4">
              <BookOpen className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {skills.frameworks.map((skill, index) => (
                <div key={index} className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-sm text-center`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software */}
          <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center mb-4">
              <Wrench className="text-orange-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            <div className="space-y-2">
              {skills.tools.map((skill, index) => (
                <div key={index} className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} text-sm`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;