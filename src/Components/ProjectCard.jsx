import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ projectData }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.95)" },
    config: { tension: 250, friction: 20 },
  });

  return (
    <animated.div
      className="max-w-7xl rounded-lg shadow-lg overflow-hidden transform transition-all duration-500"
      style={animationProps}
    >
      <div className="relative">
        <div
          className="w-full h-64 bg-cover bg-center rounded-t-lg relative p-4 custom-bg2"
          style={{
            backgroundImage: `url(${projectData.imageUrl})`,
          }}
        >
          {/* Title Overlay */}
          <div className={`absolute inset-0 rounded-t-lg ${projectData.disabled ? 'bg-black/60' : 'bg-black/40'}`}></div>
          
          {/* Title Container with flex layout */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center">
            <h3 className="glass-effect px-2 py-1 rounded-md backdrop-blur-md border border-white/10 text-2xl font-semibold">
              {projectData.title}
            </h3>
            {projectData.disabled && (
              <span className="glass-effect-secondary ml-2 text-sm text-white px-2 py-1 rounded">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-3">
        {/* Project Description */}
        <p className="text-sm">{projectData.description}</p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2 text-white">
          {projectData.technologies.map((tech, index) => (
            <span
              key={index}
              className="glass-effect bg-yellow-600 custom text-sm font-semibold py-1 px-4 rounded-full text-white button-text"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => !projectData.disabled && window.open(projectData.link, "_blank")}
            className={`flex items-center gap-2 custom font-semibold py-2 px-4 rounded-full ${
              projectData.disabled 
                ? 'bg-gray-400/80 cursor-not-allowed glass-effect-secondary' 
                : 'bg-yellow-600'
            }`}
            disabled={projectData.disabled}
          >
            <FaExternalLinkAlt className="" />
            {projectData.disabled ?  'Coming Soon' : 'View Project'}
          </button>
        </div>
      </div>

      {/* Glass effect styles */}
      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-effect-secondary {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </animated.div>
  );
};

export default ProjectCard;