import { useState, useContext } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma,
  FaNetworkWired,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

// Skills data
const skills = [
  {
    name: "HTML",
    rating: 5,
    icon: <FaHtml5 className="w-16 h-16" color="#E44D26" />,
    description: "HTML is the standard language for creating web pages.",
    iconColor: "#E44D26", // Add icon color
  },
  {
    name: "CSS",
    rating: 3,
    icon: <FaCss3Alt className="w-16 h-16" color="#2965F1" />,
    description: "CSS is used to style and layout web pages.",
    iconColor: "#2965F1", // Add icon color
  },
  {
    name: "JavaScript",
    rating: 3,
    icon: <FaJsSquare className="w-16 h-16" color="#F7DF1E" />,
    description: "JavaScript makes websites interactive and dynamic.",
    iconColor: "#F7DF1E", // Add icon color
  },
  {
    name: "React",
    rating: 4,
    icon: <FaReact className="w-16 h-16" color="#61DAFB" />,
    description: "React is a JavaScript library for building user interfaces.",
    iconColor: "#61DAFB", // Add icon color
  },
  {
    name: "Tailwind CSS",
    rating: 4,
    icon: <SiTailwindcss className="w-16 h-16" color="#38BDF8" />,
    description: "Tailwind CSS is a utility-first CSS framework.",
    iconColor: "#38BDF8", // Add icon color
  },
  {
    name: "Git",
    rating: 4,
    icon: <FaGitAlt className="w-16 h-16" color="#F05032" />,
    description: "Git is a version control system for tracking code changes.",
    iconColor: "#F05032", // Add icon color
  },
  {
    name: "GitHub",
    rating: 4,
    icon: <FaGithub className="w-16 h-16" color="#000" />,
    description:
      "GitHub is a platform for hosting and collaborating on Git repositories.",
    iconColor: "#181717", // Add icon color
  },
  {
    name: "Figma",
    rating: 4,
    icon: <FaFigma className="w-16 h-16" color="#F24E1E" />,
    description:
      "Figma is a collaborative design tool for interface design and prototyping.",
    iconColor: "#F24E1E", // Add icon color
  },
  {
    name: "API Integration",
    rating: 3,
    icon: <FaNetworkWired className="w-16 h-16" color="#006F8E" />,
    description:
      "API integration involves connecting an application with external services to exchange data.",
    iconColor: "#006F8E", // Add icon color
  },
  {
    name: "But still Human",
    rating: 5,
    icon: (
      <img
        src="/gif.gif"
        alt="Adaptability"
        className="w-16 h-16 rounded-full"
      />
    ),
    description:
      "Adaptability and quick learning of new technologies and tools to meet specific project requirements.",
    iconColor: "#000000", // Default color for non-icon skills
  },
];

const SkillCard = ({ skill, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stars above the circle (shown on hover) */}
      {isHovered && (
        <motion.div
          className="absolute -top-8 left-1 transform -translate-x-1/2 flex space-x-1 bg-white/90 rounded-full px-2 py-1 shadow-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={i < skill.rating ? skill.iconColor : "#E0E0E0"} // Use skill.iconColor
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 8.91 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </motion.svg>
          ))}
        </motion.div>
      )}

      {/* Circle with icon */}
      <motion.div
        className="relative flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-110"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        onClick={() => onClick(skill)}
      >
        {/* Rounded full skill icon */}
        <div className="w-24 h-24 flex items-center justify-center shadow-lg rounded-full border-2 border-gray-300">
          {skill.icon}
        </div>
      </motion.div>

      {/* Skill name */}
      <div className="mt-2 text-sm font-semibold text-gray-400 text-nowrap mb-5">
        {skill.name}
      </div>
    </div>
  );
};

const Skills = () => {
  const defaultSkill = skills[skills.length - 1];
  const [selectedSkill, setSelectedSkill] = useState(defaultSkill);

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill === skill ? defaultSkill : skill);
  };

  return (
    <section
      id="skills"
      className="max-w-screen-lg mx-auto py-12 px-4 flex flex-col gap-12"
    >
      {/* Introduction Section */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-yellow-500 mb-4 mt-20">
          Skills Overview
        </h2>
        <p className="text-lg text-white">
        In this section, you can explore the key skills I’ve acquired as a frontend developer. These are the core technologies and tools I use to build responsive, dynamic, and interactive web applications.
        </p>
      </div>

      {/* Label above skills grid */}
      <div className="text-center text-white mb-4">
        <p>
          Hover over a skill to see proficiency level. Click to see details.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Description Section */}
        <div className="w-full md:w-2/3 top-4 h-fit mb-10">
          {selectedSkill ? (
            <div className="border border-yellow-500 p-6 pl-0 pt-0 rounded-lg shadow-md flex items-start space-x-4">
              {/* Vertical stars at the left edge */}
              <div className="flex flex-col space-y-1 bg-yellow-500 p-3 rounded-tl-lg rounded-br-2xl py-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill={i < selectedSkill.rating ? selectedSkill.iconColor : "#E0E0E0"} // Use selectedSkill.iconColor
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 8.91 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Icon and text */}
              <div className="flex flex-col items-center">
                {/* Bigger icon */}
                <div className="w-20 h-20 flex items-center justify-center mb-4">
                  {selectedSkill.icon}
                </div>

                {/* Text below the icon */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-4">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-lg text-gray-400">
                    {selectedSkill.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-lg text-gray-600">
              Click on a skill to see the description.
            </p>
          )}
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 w-full">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              onClick={handleSkillClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;