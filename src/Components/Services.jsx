import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPlug,
  FaCodeBranch,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-yellow-500 mb-4" />,
      title: "Responsive Web Design",
      description: "Create websites that look great on all devices, from desktops to mobiles.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-yellow-500 mb-4" />,
      title: "Interactive Web Apps",
      description: "Build dynamic, user-friendly web applications with modern frameworks.",
    },
    {
      icon: <FaPlug className="text-4xl text-yellow-500 mb-4" />,
      title: "API Integration",
      description: "Connect web applications with external services and APIs for enhanced functionality.",
    },
    {
      icon: <FaCodeBranch className="text-4xl text-yellow-500 mb-4" />,
      title: "Version Control & Collaboration",
      description: "Manage codebases with tools like Git and GitHub, ensuring seamless team collaboration.",
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-500 mb-4" />,
      title: "Cross-Browser Compatibility",
      description: "Ensure websites look and perform consistently across all major browsers.",
    },
    {
      icon: <FaRocket className="text-4xl text-yellow-500 mb-4" />,
      title: "Web Optimization",
      description: "Ensure websites load quickly, are SEO-friendly, and perform well across devices.",
    },
  ];

  // Duplicate services to create a seamless loop
  const duplicatedServices = [...services, ...services];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Function to enable continuous scrolling
    const startScrolling = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Adjust speed as needed
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset to start for seamless loop
        }
      }
    };

    // Start the continuous scroll animation
    const scrollInterval = setInterval(startScrolling, 20); // Adjust speed as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="services" className="py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500">Services</h2>
          <p className="mt-4 text-lg text-gray-400">
            What I bring to the table as a frontend developer.
          </p>
        </header>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="md:hidden overflow-x-auto no-scrollbar"
        >
          <div className="flex gap-8 pb-4">
            {duplicatedServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[280px]"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout for Larger Screens */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </section>
  );
};

export default Services;