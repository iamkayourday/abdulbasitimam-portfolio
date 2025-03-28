import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Mode from "./Mode";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: "about", text: "About Me" },
    { to: "skills", text: "Skills" },
    { to: "timeline", text: "Timeline" },
    { to: "services", text: "Services" },
    { to: "projects", text: "Projects" },
    { to: "testimonial", text: "Testimonials" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/50 border-b border-white/10 shadow-lg"
            : "bg-black/80"
        } ${isOpen ? "opacity-0 pointer-events-none" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="group cursor-pointer transition-all duration-300"
            onClick={closeMenu}
          >
            <div className="logo text-2xl custom-text md:text-4xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
              Abdulbasit
            </div>
          </Link>

          {/* Desktop Navigation with Mode toggle */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="relative text-white/90 hover:text-white cursor-pointer transition-colors duration-300 py-1 px-3 text-sm uppercase tracking-wider group"
                activeClass="text-yellow-500 custom-text"
                spy={true}
              >
                {item.text}
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></span>
              </Link>
            ))}

            <div className="ml-4 flex items-center gap-4">
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="bg-yellow-500 custom text-black font-bold px-5 py-2 rounded-lg transition-all duration-300 text-sm shadow-lg hover:text-white">
                  Contact Me
                </button>
              </Link>
              <div className="bg-white/40 p-2 rounded-full md:block hidden">
                <Mode />
              </div>
            </div>
          </nav>

          {/* Mobile & Tablet Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <div className="md:block">
              <Mode />
            </div>
            <button
              ref={menuButtonRef}
              className="text-white text-2xl z-50 transition-all duration-200 hover:scale-110 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          ref={mobileMenuRef}
          className={`absolute top-0 left-0 w-full h-full bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Menu Content - Adjusted for tablet */}
          <div className="relative bg-gradient-to-br from-black to-gray-900 border border-yellow-500/20 rounded-xl p-8 w-full max-w-md mx-4 shadow-2xl shadow-gray-300/10">
            <nav className="flex flex-col items-center space-y-6">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="group cursor-pointer transition-all duration-300 mb-8"
                onClick={closeMenu}
              >
                <div className="text-3xl md:text-4xl font-bold text-white transition-colors duration-300">
                  Abdulbasit
                </div>
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative w-full text-center text-white/90 hover:text-white cursor-pointer transition-colors duration-300 py-3 text-xl md:text-2xl group"
                  onClick={closeMenu}
                  activeClass="custom-text text-yellow-500 font-medium"
                  spy={true}
                >
                  {item.text}
                  <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-yellow-500 custom transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></span>
                </Link>
              ))}

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="w-full mt-8"
                onClick={closeMenu}
              >
                <button className="w-full font-bold hover:text-white px-6 py-3 bg-yellow-500 custom rounded-lg transition-all duration-300 shadow-2xl text-lg md:text-xl">
                  Contact Me
                </button>
              </Link>
            </nav>

            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;