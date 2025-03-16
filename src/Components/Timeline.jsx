import React, { useState, useEffect, useRef } from "react";

// Sample data for certificates with organization logos
const certificates = [
  {
    title: "HTML, CSS and JavaScript for Web Developers",
    date: "May 2023",
    description:
      "Specialized in creating dynamic and interactive web pages using HTML, CSS, and JavaScript, focusing on web development fundamentals.",
    logo: "logo2.png",
  },
  {
    title: "HTML5 & CSS Complete course: Build website like a pro",
    date: "June 2024",
    description:
      "Learned professional techniques for building modern, responsive websites using HTML5 and CSS3, with a focus on best practices and design principles.",
    logo: "logo3.png",
  },
  {
    title: "Front-End Web Development",
    date: "October 2024",
    description:
      "Completed an in-depth course on front-end web development, mastering tools and frameworks like HTML, CSS, JavaScript, React, and more!",
    logo: "Logo1.jpg",
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
    <section ref={timelineRef} id="timeline" className="py-20 px-4 sm:px-6 mt-20">
      {/* Header and Introduction */}
      <header className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500">Timeline</h1>
        <p className="mt-12 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
          Explore my journey, including certifications, academic training, and
          professional experiences, showcasing my growth in frontend development.
        </p>
      </header>

      <div className="max-w-screen-lg mx-auto flex">
        {/* Progress Bar Container */}
        <div className="relative w-1 bg-gray-300">
          {/* Scroll Progress Indicator */}
          <div
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-yellow-400 to-gray-700 rounded"
            style={{
              height: `${scrollProgress}%`,
              transition: "height 0.2s ease-in-out",
            }}
          ></div>

          {/* Timeline Dots */}
          {certificates.map((_, index) => {
            const position = (index / (certificates.length - 1)) * 100;
            return (
              <div
                key={index}
                className="absolute left-[-9px] w-6 h-6 border-4 border-gray-400 bg-white rounded-full"
                style={{ top: `${position}%`, transform: "translateY(-50%)" }}
              ></div>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div className="ml-6 sm:ml-10 md:ml-16 flex-1 space-y-12 sm:space-y-16">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
              style={{
                animation: `fadeUp 0.8s ease-out ${index * 0.3}s forwards`,
              }}
            >
              {/* Title and Date */}
              <h3 className="text-xl font-semibold text-yellow-500">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-4 sm:mb-6">{cert.date}</p>
              <p className="text-base text-gray-200 mb-8 sm:mb-12">{cert.description}</p>

              {/* Organization Logo */}
              <div className="w-full sm:w-[350px] p-6 sm:p-8 border-2 border-yellow-500 rounded-lg shadow-lg">
                <img
                  src={cert.logo}
                  alt={`${cert.title} logo`}
                  className="w-full h-32 sm:h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Timeline;