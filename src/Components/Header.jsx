import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Mode from "./Mode";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
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

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 border-b border-white/10 shadow-xl"
            : "bg-black/60"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="group cursor-pointer transition-all duration-300"
              onClick={closeMenu}
            >
              <div className="logo text-2xl custom-text text-yellow-400 md:text-4xl font-bold group-hover:scale-105 transition-transform duration-300">
                Abdulbasit
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`relative cursor-pointer transition-all duration-300 py-2 px-4 text-sm uppercase tracking-wider rounded-lg ${
                    activeSection === item.to
                      ? "custom-text text-yellow-400 bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                  activeClass="custom-text text-yellow-400"
                  spy={true}
                  onSetActive={setActiveSection}
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}

            <div className="ml-4 flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  <button className="custom bg-yellow-500 text-black font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105">
                    Contact Me
                  </button>
                </Link>
              </motion.div>
              <motion.div 
                className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mode />
              </motion.div>
            </div>
          </nav>

          {/* Mobile & Tablet Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <motion.div 
              className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mode />
            </motion.div>
            <motion.button
              ref={menuButtonRef}
              className="text-white text-2xl z-50 transition-all duration-200 hover:scale-110 focus:outline-none bg-white/10 p-2 rounded-lg backdrop-blur-sm"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile & Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Content */}
            <motion.div
              ref={mobileMenuRef}
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="relative bg-slate-900/90 border border-slate-700/50 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl backdrop-blur-sm">
                <nav className="flex flex-col items-center space-y-4">
                  {/* Logo */}
                  <motion.div
                    variants={itemVariants}
                    className="mb-8"
                  >
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="cursor-pointer"
                      onClick={closeMenu}
                    >
                      <div className="text-3xl md:text-4xl font-bold custom-text text-yellow-400">
                        Abdulbasit
                      </div>
                    </Link>
                  </motion.div>

                  {/* Menu Items */}
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className={`block w-full text-center py-4 text-lg md:text-xl rounded-lg transition-all duration-300 ${
                          activeSection === item.to
                            ? "custom-text text-yellow-400 bg-white/10 font-semibold"
                            : "text-white/90 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={closeMenu}
                        activeClass="custom-text text-yellow-400"
                        spy={true}
                      >
                        {item.text}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Contact Button */}
                  <motion.div
                    variants={itemVariants}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="w-full mt-6"
                  >
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="w-full"
                      onClick={closeMenu}
                    >
                      <button className="w-full custom bg-yellow-500 text-black font-bold px-6 py-4 rounded-lg transition-all duration-300 text-lg md:text-xl hover:scale-105 hover:shadow-lg">
                        Contact Me
                      </button>
                    </Link>
                  </motion.div>
                </nav>

                {/* Close button */}
                <motion.button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 bg-white/10 p-2 rounded-lg backdrop-blur-sm"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;