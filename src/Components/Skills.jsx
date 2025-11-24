import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNetworkWired,
  FaPython
} from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";

// Updated skills data
const skills = [
  {
    name: "HTML",
    rating: 5,
    icon: <FaHtml5 className="w-16 h-16" color="#E44D26" />,
    description: "Semantic HTML5 for creating accessible and SEO-friendly web pages.",
    iconColor: "#E44D26",
  },
  {
    name: "CSS",
    rating: 4,
    icon: <FaCss3Alt className="w-16 h-16" color="#2965F1" />,
    description: "Modern CSS with Flexbox, Grid, and responsive design principles.",
    iconColor: "#2965F1",
  },
  {
    name: "JavaScript",
    rating: 4,
    icon: <FaJsSquare className="w-16 h-16" color="#F7DF1E" />,
    description: "ES6+ features, async programming, and DOM manipulation for interactive websites.",
    iconColor: "#F7DF1E",
  },
  {
    name: "React",
    rating: 4,
    icon: <FaReact className="w-16 h-16" color="#61DAFB" />,
    description: "Component-based library for building dynamic user interfaces with hooks.",
    iconColor: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    rating: 4,
    icon: <SiTailwindcss className="w-16 h-16" color="#38BDF8" />,
    description: "Utility-first CSS framework for rapid and consistent UI development.",
    iconColor: "#38BDF8",
  },
  {
    name: "Python",
    rating: 4,
    icon: <FaPython className="w-16 h-16" color="#3776AB" />,
    description: "Backend development with clean, readable code and extensive libraries.",
    iconColor: "#3776AB",
  },
  {
    name: "Django",
    rating: 4,
    icon: <SiDjango className="w-16 h-16" color="#092E20" />,
    description: "High-level Python web framework for robust and scalable applications.",
    iconColor: "#092E20",
  },
  {
    name: "Django REST",
    rating: 4,
    icon: <SiDjango className="w-16 h-16" color="#A30000" />,
    description: "Building powerful and flexible REST APIs for web and mobile applications.",
    iconColor: "#A30000",
  },
  {
    name: "Git",
    rating: 4,
    icon: <FaGitAlt className="w-16 h-16" color="#F05032" />,
    description: "Version control system for efficient collaboration and code management.",
    iconColor: "#F05032",
  },
  {
    name: "GitHub",
    rating: 4,
    icon: <FaGithub className="w-16 h-16" color="#181717" />,
    description: "Platform for code hosting, collaboration, and project management.",
    iconColor: "#181717",
  },
  {
    name: "Figma",
    rating: 4,
    icon: <FaFigma className="w-16 h-16" color="#F24E1E" />,
    description: "Design and prototyping tool for creating intuitive user interfaces.",
    iconColor: "#F24E1E",
  },
  {
    name: "API Integration",
    rating: 4,
    icon: <FaNetworkWired className="w-16 h-16" color="#006F8E" />,
    description: "Connecting applications with external services and RESTful APIs.",
    iconColor: "#006F8E",
  },
  {
    name: "Adaptability",
    rating: 5,
    icon: (
      <img
        src="/gif.gif"
        alt="Adaptability"
        className="w-16 h-16 rounded-full"
      />
    ),
    description: "Quick learning and adaptation to new technologies and project requirements.",
    iconColor: "#000000",
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
      {/* Stars above the circle - properly centered */}
      {isHovered && (
        <motion.div
          className="absolute -top-10 left-1/6 transform -translate-x-1/3 flex space-x-2 rounded-full px-3 py-2 shadow-lg border border-gray-200"
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={i < skill.rating ? skill.iconColor : "#E5E7EB"}
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.2 }}
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 8.91 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </motion.svg>
          ))}
        </motion.div>
      )}

      {/* Circle with icon */}
      <motion.div
        className="relative flex flex-col items-center justify-center cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        onClick={() => onClick(skill)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-24 h-24 flex items-center justify-center shadow-lg rounded-full border-2 border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
          {skill.icon}
        </div>
      </motion.div>

      {/* Skill name */}
      <div className="mt-3 text-sm font-semibold text-center">
        {skill.name}
      </div>
    </div>
  );
};

const Skills = () => {
  const defaultSkill = skills[0];
  const [selectedSkill, setSelectedSkill] = useState(defaultSkill);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold custom-text text-yellow-500 mb-6">
          Technical Skills
        </h2>
        <p className="text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed">
          From frontend interfaces to backend systems, I bring full-stack expertise to build 
          complete, scalable web applications.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Preview Section - Sticky (Left on desktop, top on mobile) */}
        <motion.div 
          className="w-full lg:w-1/2 order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="lg:sticky lg:top-24">
            <div className="border-2 custom-border rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-xl shadow-lg border border-gray-200">
                  {selectedSkill.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold  mb-2">
                    {selectedSkill.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Proficiency:</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill={i < selectedSkill.rating ? selectedSkill.iconColor : "#E5E7EB"}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 8.91 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-lg leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Click any skill to learn more about my experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid (Right on desktop, bottom on mobile) */}
        <motion.div 
          className="w-full lg:w-1/2 order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <p className="text-lg">
              Hover to see proficiency • Click for details
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 mt-2">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                onClick={handleSkillClick}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;