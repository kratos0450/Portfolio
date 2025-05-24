import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">

              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md mr-4`}>
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:spraveen0450@gmail.com" className="text-gray-600 hover:text-blue-600">spraveen0450@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md mr-4`}>
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+918610322907" className="text-gray-600 hover:text-green-600">+91-8610322907</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md mr-4`}>
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Coimbatore,Tamil nadu,India.</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a href="https://github.com/tech-no-guy" target="_blank" rel="noopener noreferrer">
                  <Github className="text-gray-700 hover:text-black" size={28} />
                </a>
                <a href="https://www.linkedin.com/in/praveen-sivanandham-8a38762b0" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-blue-600 hover:text-blue-800" size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="p-3 border rounded w-full" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="p-3 border rounded w-full" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="p-3 border rounded w-full" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required className="p-3 border rounded w-full"></textarea>
              <button type="submit" className="flex items-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
                <Send className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
