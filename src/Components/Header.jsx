import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 border-b border-white/10 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">Abdulbasit</div>

        {/* Menu Button (Visible on Mobile Only) */}
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 absolute lg:static inset-x-0 top-24 left-1/2 transform -translate-x-1/2 bg-white/30 lg:bg-transparent backdrop-blur-md border-t lg:border-none border-white/10 transition-all duration-300 ${
            isOpen
              ? 'opacity-100 visible top-16 ease-in-out duration-300'
              : 'opacity-0 invisible top-[-100%]'
          } lg:opacity-100 lg:visible lg:top-auto lg:left-auto lg:transform-none lg:flex-row`}
        >
          {/* Link to scroll to About section */}
          <a
            href="#about"
            className="block text-black lg:text-black hover:text-yellow-500 transition-all transform duration-300 cursor-pointer text-center"
          >
            About me
          </a>
          
          {/* Link to scroll to Skills section */}
          <a
            href="#skills"
            className="block text-black lg:text-black hover:text-yellow-500 transition-all transform duration-300 cursor-pointer text-center"
          >
            Skills
          </a>

          {/* Link to scroll to Timeline section */}
          <a
            href="#timeline"
            className="block text-black lg:text-black hover:text-yellow-500 transition-all transform duration-300 cursor-pointer text-center"
          >
            Timeline
          </a>

          {/* Link to scroll to Projects section */}
          <a
            href="#projects"
            className="block text-black lg:text-black hover:text-yellow-500 transition-all transform duration-300 cursor-pointer text-center"
          >
            Projects
          </a>

          {/* Centered Button (Contact me) */}
          <div className="flex justify-center lg:ml-auto lg:mr-auto">
            <a href="#contact">
              <button className="text-black bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md transition-all transform duration-300">
                Contact me
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
