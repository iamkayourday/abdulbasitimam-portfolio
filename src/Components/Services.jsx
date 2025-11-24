import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPlug,
  FaCodeBranch,
  FaGlobe,
  FaRocket,
  FaServer,
  FaDatabase,
  FaPython,
  FaShieldAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Frontend Development",
      description: "Build responsive, interactive user interfaces with React, JavaScript, and modern CSS frameworks.",
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: "Backend Development",
      description: "Develop robust server-side applications using Python, Django, and REST API architecture.",
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Full-Stack Applications",
      description: "Create complete web applications from frontend to backend with seamless integration.",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Database Design",
      description: "Design and implement efficient database structures and data models for web applications.",
    },
    {
      icon: <FaPlug className="text-4xl" />,
      title: "API Integration",
      description: "Connect applications with external services and third-party APIs for enhanced functionality.",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Security & Performance",
      description: "Implement security best practices and optimize applications for speed and reliability.",
    },
  ];

  // Duplicate services to create a seamless loop
  const duplicatedServices = [...services, ...services];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const startScrolling = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(startScrolling, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold custom-text text-yellow-400 mb-4 md:mb-6">
            My Services
          </h2>
          <p className="text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            From frontend interfaces to complete full-stack solutions, I deliver comprehensive web development services.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="text-center mb-6">
            <p className="text-sm">Swipe to explore →</p>
          </div>
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar py-4"
          >
            <div className="flex gap-4 min-w-max px-4">
              {duplicatedServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl border-2 custom-border border-yellow-400 p-5 w-[85vw] transform transition-all duration-300 hover:scale-105 flex flex-col"
                >
                  <div className="custom-text text-yellow-400 mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 custom-text text-yellow-400">{service.title}</h3>
                  <p className="text-sm leading-relaxed flex-grow">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border-2 custom-border p-6 transform transition-all duration-300 hover:scale-105 group flex flex-col h-full"
            >
              <div className="custom-text text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 custom-text text-yellow-400">
                {service.title}
              </h3>
              <p className="leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="mt-12 md:mt-16"></div>
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Services;