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
          className="w-full h-64 bg-cover bg-center rounded-t-lg relative  p-4 custom-bg2"
          style={{
            backgroundImage: `url(${projectData.imageUrl})`,
          }}
        >
          {/* Title Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-t-lg"></div>
          {/* Dark overlay for better text readability */}
          <h2 className="absolute bottom-4 left-4 text-2xl font-semibold z-10">
            {projectData.title}
          </h2>
        </div>
      </div>

      <div className="p-3">
        {/* Project Description */}
        <p className=" text-sm">{projectData.description}</p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2 text-white">
          {projectData.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-yellow-600 custom  text-sm font-semibold py-2 px-4 rounded-full text-white button-text"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => window.open(projectData.link, "_blank")}
            className="flex items-center gap-2 custom bg-yellow-600   font-semibold py-2 px-4 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled// Add this to disable the button
          >
            <FaExternalLinkAlt className="" />
            View Project
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectCard;
