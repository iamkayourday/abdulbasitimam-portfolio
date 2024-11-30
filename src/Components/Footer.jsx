import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Footer Left Section: Footer Title and Description */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-3xl font-bold">Abdulbasit from Nigeria</h3>
          <p className="text-base text-gray-400 mt-3 max-w-md leading-relaxed">
            Passionate frontend developer dedicated to crafting dynamic, interactive, and responsive web experiences. Let's build something amazing together.
          </p>
        </div>

        {/* Footer Right Section: Social Media Links */}
        <div className="flex space-x-8">
          <a
            href="https://github.com/Abdulbasit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulbasit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://twitter.com/Abdulbasit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110"
          >
            <FaTwitter size={35} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section: Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        <p>© 2024 Abdulbasit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
