import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Icons for contact details

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="text-center">
          <h3 className="text-3xl font-bold custom-text text-yellow-500 logo">Abdulbasit</h3>
        </div>

        {/* My Links */}
        <div className="flex flex-col items-center space-y-4">
          {/* <h4 className="text-xl font-semibold">My Links</h4> */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#about"
              className="relative text-gray-600 dark:hover:text-[#1e1e1f]hover:text-white transition-colors duration-300 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#skills"
              className="relative text-gray-600 dark:hover:text-[#1e1e1f]hover:text-white transition-colors duration-300 group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#timeline"
              className="relative text-gray-600 dark:hover:text-[#1e1e1f]hover:text-white transition-colors duration-300 group"
            >
              Timeline
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="relative text-gray-600 dark:hover:text-[#1e1e1f]hover:text-white transition-colors duration-300 group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonial"
              className="relative text-gray-600 dark:hover:text-[#1e1e1f]hover:text-white transition-colors duration-300 group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="relative text-gray-600 dark:hover:text-[#1e1e1f] hover:text-white  transition-colors duration-300 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center space-y-4">
          {/* <h4 className="text-xl font-semibold mt-10">Contact Details</h4> */}
          <div className="flex space-x-6">
  {/* Phone */}
  <a
    href="tel:+2349025021272"
    className="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 custom-border rounded-full text-gray-600 hover:text-white transition-colors duration-300 hover:animate-pulse"
  >
    <FaPhone className="text-2xl text-green-600" /> {/* Official phone color */}
  </a>
  
  {/* WhatsApp */}
  <a
    href="https://wa.me/2349025021272"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 custom-border rounded-full text-gray-600 hover:text-white transition-colors duration-300 hover:animate-pulse"
  >
    <FaWhatsapp className="text-2xl text-green-500" /> {/* WhatsApp green */}
  </a>

  {/* Email */}
  <a
    href="mailto:abdulbasitkayode@gmail.com"
    className="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 custom-border rounded-full text-gray-600 hover:text-white transition-colors duration-300 hover:animate-pulse"
  >
    <FaEnvelope className="text-2xl text-red-600" /> {/* Email red */}
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/iamkayourday"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 custom-border rounded-full text-gray-600 hover:text-white transition-colors duration-300 hover:animate-pulse"
  >
    <FaGithub className="text-2xl text-gray-800" /> {/* GitHub black/gray */}
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/abdulbasitimam"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 border-2 border-yellow-500 custom-border rounded-full text-gray-600 hover:text-white transition-colors duration-300 hover:animate-pulse"
  >
    <FaLinkedin className="text-2xl text-blue-600" /> {/* LinkedIn blue */}
  </a>
</div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm  border-t dark:border-gray-900 pt-4">
          <p>©-2025 Abdulbasit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;