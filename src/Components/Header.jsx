import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close menu after clicking an item
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-white/10 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">Abdulbasit</div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="text-black dark:text-white focus:outline-none"
        >
          {isDarkMode ? (
            // Moon Icon for Dark Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m7-10h1m-16 0h1m10.11 6.29a5.978 5.978 0 00-1.11-7.29m-1.11 7.29a5.978 5.978 0 001.11 7.29m1.11-7.29H5.89"
              />
            </svg>
          ) : (
            // Sun Icon for Light Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m7-10h1m-16 0h1m10.11 6.29a5.978 5.978 0 00-1.11-7.29m-1.11 7.29a5.978 5.978 0 001.11 7.29m1.11-7.29H5.89"
              />
            </svg>
          )}
        </button>

        {/* Menu Button (Visible on Mobile Only) */}
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className={`h-6 w-6 transition-transform ease-in-out duration-300 ${isOpen ? 'rotate-90' : ''}`}
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

        {/* Navigation Menu */}
        <nav
          className={`fixed inset-x-0 top-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center gap-8 transition-transform transform ease-in-out duration-300 ${isOpen ? 'translate-y-24' : '-translate-y-full'} lg:static lg:flex-row lg:bg-transparent lg:translate-y-0 lg:text-black lg:gap-4`}
        >
          <Link
            to="about"
            className="cursor-pointer text-2xl lg:text-base hover:text-yellow-500 transition-colors"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuItemClick}
          >
            About Me
          </Link>
          <Link
            to="skills"
            className="text-2xl cursor-pointer lg:text-base hover:text-yellow-500 transition-colors"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuItemClick}
          >
            Skills
          </Link>
          <Link
            to="timeline"
            className="text-2xl cursor-pointer lg:text-base hover:text-yellow-500 transition-colors"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuItemClick}
          >
            Timeline
          </Link>
          <Link
            to="projects"
            className="text-2xl cursor-pointer lg:text-base hover:text-yellow-500 transition-colors"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuItemClick}
          >
            Projects
          </Link>
          <Link
            to="testimonial"
            className="text-2xl cursor-pointer lg:text-base hover:text-yellow-500 transition-colors"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuItemClick}
          >
            Testimonial
          </Link>
          <Link
            to="contact"
            className="text-2xl cursor-pointer lg:text-base bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition-transform"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuItemClick}
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
