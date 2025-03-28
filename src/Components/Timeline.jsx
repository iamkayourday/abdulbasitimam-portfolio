import React, { useState, useEffect, useRef } from "react";

const certificates = [
  {
    title: "HTML, CSS and JavaScript for Web Developers",
    date: "May 2023",
    description:
      "Specialized in creating dynamic and interactive web pages using HTML, CSS, and JavaScript, focusing on web development fundamentals.",
    logo: "logo2.png",
  },
  {
    title: "HTML5 & CSS Complete Course: Build Websites Like a Pro",
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
    <section ref={timelineRef} id="timeline" className="py-20 px-6 sm:px-12 relative ">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-md">
          My Journey
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto ">
          Explore my certifications, academic achievements, and professional experiences in frontend development.
        </p>
      </header>

      <div className="max-w-screen-lg mx-auto flex">
        {/* Progress Bar */}
        <div className="relative w-1 bg-gray-700 rounded-lg">
          {/* Scroll Indicator */}
          <div
            className="absolute left-0 top-0 w-full bg-yellow-400 custom rounded-lg"
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
                className="absolute left-[-10px] w-6 h-6 border-4 border-gray-500 bg-black rounded-full shadow-md"
                style={{ top: `${position}%`, transform: "translateY(-50%)" }}
              ></div>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div className="ml-8 sm:ml-14 flex-1 space-y-12 sm:space-y-16">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
              style={{
                animation: `fadeUp 0.8s ease-out ${index * 0.3}s forwards`,
              }}
            >
              {/* Title & Date */}
              <h3 className="text-2xl font-bold text-yellow-400">{cert.title}</h3>
              <p className="text-lg mb-4 font-semibold ">{cert.date}</p>
              <p className="text-base  mb-8">{cert.description}</p>

              {/* Certificate Image */}
              <div className="w-full sm:w-[350px] p-6 sm:p-8 border border-yellow-500 custom-border rounded-lg shadow-xl bg-white bg-opacity-10 backdrop-blur-lg transform transition hover:scale-105 hover:animate-pulse">
                <img
                  src={cert.logo}
                  alt={`${cert.title} logo`}
                  className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
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
