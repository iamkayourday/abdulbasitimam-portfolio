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
  {
    title: "Backend Development with Python & Django",
    date: "December 2024",
    description:
      "Mastered backend development using Python and Django framework, building robust REST APIs, database management, and server-side logic.",
    logo: "Logo1.jpg",
  },
  // {
  //   title: "Full-Stack Web Development",
  //   date: "Present",
  //   description:
  //     "Currently expanding expertise in full-stack development, integrating frontend and backend technologies to build complete web applications.",
  //   logo: "Logo1.jpg",
  // }
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
    <section ref={timelineRef} id="timeline" className="py-20 px-6 sm:px-12 relative">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold custom-text text-yellow-400 drop-shadow-md">
          My Journey
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
          Follow my evolution from frontend to full-stack developer through certifications and learning milestones.
        </p>
      </header>

      <div className="max-w-6xl mx-auto flex">
        {/* Progress Bar - Always on left */}
        <div className="hidden md:block relative w-1 rounded-lg mr-8">
          <div
            className="absolute left-0 top-0 w-full custom bg-yellow-400 rounded-lg transition-all duration-300 ease-out"
            style={{
              height: `${scrollProgress}%`,
            }}
          ></div>
          
          {/* Timeline Dots */}
          {certificates.map((_, index) => {
            const position = (index / (certificates.length - 1)) * 100;
            return (
              <div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 border-4 border-white bg-yellow-400 custom rounded-full shadow-lg"
                style={{ top: `${position}%` }}
              ></div>
            );
          })}
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden relative w-1 rounded-lg mr-6">
          <div
            className="absolute left-0 top-0 w-full bg-yellow-400 custom rounded-lg transition-all duration-300 ease-out"
            style={{
              height: `${scrollProgress}%`,
            }}
          ></div>
          
          {/* Timeline Dots */}
          {certificates.map((_, index) => {
            const position = (index / (certificates.length - 1)) * 100;
            return (
              <div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 border-4 border-white bg-yellow-400 custom  rounded-full shadow-lg"
                style={{ top: `${position}%` }}
              ></div>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div className="flex-1">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`mb-12 opacity-0 transform translate-y-10 transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-12'
              }`}
              style={{
                animation: `fadeUp 0.8s ease-out ${index * 0.3}s forwards`,
              }}
            >
              {/* Desktop: Alternate layout */}
              <div className="hidden md:block">
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className=" rounded-2xl shadow-xl border-2 border-yellow-400 custom-border p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <h3 className="text-xl font-bold  mb-2">{cert.title}</h3>
                      <p className="text-sm custom-text text-yellow-400 font-semibold mb-3">{cert.date}</p>
                      <p className="leading-relaxed mb-4">{cert.description}</p>
                      
                      {/* Certificate Image */}
                      <div className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <img
                          src={cert.logo}
                          alt={`${cert.title} logo`}
                          className="w-full h-32 object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="w-12"></div>
                </div>
              </div>

              {/* Mobile: Simple stacked layout */}
              <div className="md:hidden">
                <div className="rounded-2xl shadow-xl border-2  custom-border p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-xl font-bold custom-text text-yellow-400  mb-2">{cert.title}</h3>
                  <p className="text-sm custom-text text-yellow-400 font-semibold mb-3">{cert.date}</p>
                  <p className="leading-relaxed mb-4">{cert.description}</p>
                  
                  {/* Certificate Image */}
                  <div className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <img
                      src={cert.logo}
                      alt={`${cert.title} logo`}
                      className="w-full h-32 object-contain rounded-lg"
                    />
                  </div>
                </div>
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