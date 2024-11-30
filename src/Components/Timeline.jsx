import React, { useState, useEffect, useRef } from 'react';

// Sample data for certificates with image URLs
const certificates = [
  { 
    title: "Frontend Developer Certification", 
    date: "January 2024", 
    description: "Completed a comprehensive course on frontend development including HTML, CSS, JavaScript, React, and more.", 
    image: "https://via.placeholder.com/150" // Replace with your image URL
  },
  { 
    title: "React Developer Certification", 
    date: "March 2024", 
    description: "Achieved certification in React development, focusing on hooks, components, and state management.", 
    image: "https://via.placeholder.com/150" // Replace with your image URL
  },
  { 
    title: "JavaScript Advanced Certification", 
    date: "June 2024", 
    description: "Completed an advanced JavaScript course with a focus on ES6+ features, async programming, and performance optimization.", 
    image: "https://via.placeholder.com/150" // Replace with your image URL
  },
  { 
    title: "Node.js Developer Certification", 
    date: "September 2024", 
    description: "Received certification in Node.js, learning server-side JavaScript, Express, and RESTful API development.", 
    image: "https://via.placeholder.com/150" // Replace with your image URL
  },
  { 
    title: "Full Stack Development Certification", 
    date: "November 2024", 
    description: "Full-stack web development certification, including front-end and back-end technologies like MongoDB, Node.js, and React.", 
    image: "https://via.placeholder.com/150" // Replace with your image URL
  },
];

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const updateScrollProgress = () => {
    const element = timelineRef.current;
    if (element) {
      const totalHeight = element.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY - element.offsetTop;
      const progress = (scrollTop / totalHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <section ref={timelineRef} id='timeline' className="py-20 px-4 bg-gray-100 relative">
      {/* Header and Introduction */}
      <header id='timeline' className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Timeline</h1>
        <p className="mt-4 text-lg text-gray-600">
          A detailed timeline showcasing my achievements and the certifications I've earned throughout my professional journey.
        </p>
      </header>

      <div className="max-w-screen-lg mx-auto flex">
        {/* Progress Bar Container */}
        <div className="relative w-2 bg-gray-200">
          {/* Gradient Progress Bar */}
          <div
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-yellow-200 to-gray-600"
            style={{
              height: `${scrollProgress}%`,
              transition: 'height 0.2s ease-in-out',
            }}
          ></div>

          {certificates.map((_, index) => {
            const position = (index / (certificates.length - 1)) * 100;
            return (
              <div
                key={index}
                className="absolute left-[-10px] w-6 h-6 border-4 border-gray-300 bg-white rounded-full"
                style={{ top: `${position}%`, transform: 'translateY(-50%)' }}
              ></div>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div className="ml-10 flex-1">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="mb-12 opacity-0 transform translate-y-10 transition-all duration-700 ease-out" 
              style={{
                animation: `fadeUp 0.8s ease-out ${index * 0.3}s forwards`,
              }}
            >
              <div className="p-6 bg-white shadow-lg rounded-lg">
                {/* Certificate Image */}
                <img src={cert.image} alt={cert.title} className="w-20 h-20 mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.date}</p>
                <p className="mt-2 text-gray-700">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
