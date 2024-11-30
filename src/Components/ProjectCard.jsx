import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ projectData }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.95)' },
    config: { tension: 250, friction: 20 },
  });

  return (
    <animated.div
      className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500"
      style={animationProps}
    >
      <div className="relative">
        {/* Project Image */}
        <img
          src={projectData.imageUrl}
          alt={projectData.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
          <h2 className="text-2xl font-semibold">{projectData.title}</h2>
        </div>
      </div>
      <div className="p-6">
        {/* Project Description */}
        <p className="text-gray-700">{projectData.description}</p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {projectData.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-yellow-600 text-white text-sm font-semibold py-2 px-4 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => window.open(projectData.link, '_blank')}
            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full"
          >
            <FaExternalLinkAlt className="text-white" />
            View Project
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectCard;
