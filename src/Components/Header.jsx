import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close menu after clicking an item
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "skills",
        "timeline",
        "services",
        "projects",
        "testimonial",
        "contact",
      ];
      let currentSection = "";
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-white/10 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Abdulbasit</div>

        {/* Menu Button (Mobile) */}
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed inset-x-0 top-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center gap-8 transition-transform transform ease-in-out duration-300 lg:static lg:flex-row lg:bg-transparent lg:translate-y-0 lg:text-black lg:gap-6 ${
            isOpen ? "translate-y-24" : "-translate-y-full lg:translate-y-0"
          }`}
        >
          {[
            { to: "about", label: "ABOUT ME" },
            { to: "skills", label: "SKILLS" },
            { to: "timeline", label: "TIMELINE" },
            { to: "services", label: "SERVICES" },
            { to: "projects", label: "PROJECTS" },
            { to: "testimonial", label: "TESTIMONIALS" },
            { to: "contact", label: "CONTACT ME" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`cursor-pointer text-2xl lg:text-base relative transition-colors text-white hover:text-yellow-500 ${
                activeSection === item.to ? "text-yellow-500 font-semibold" : ""
              }`}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleMenuItemClick}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-500 transition-all duration-300 scale-x-0 origin-left hover:scale-x-100 ${
                  activeSection === item.to ? "scale-x-100" : ""
                }`}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
