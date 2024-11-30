import { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaFigma, FaNetworkWired } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

// Skills data
const skills = [
  { name: "HTML", rating: 5, icon: <FaHtml5 size={30} color="#E44D26" />, description: "HTML is the standard language for creating web pages." },
  { name: "CSS", rating: 3, icon: <FaCss3Alt size={30} color="#2965F1" />, description: "CSS is used to style and layout web pages." },
  { name: "JavaScript", rating: 3, icon: <FaJsSquare size={30} color="#F7DF1E" />, description: "JavaScript makes websites interactive and dynamic." },
  { name: "React", rating: 4, icon: <FaReact size={30} color="#61DAFB" />, description: "React is a JavaScript library for building user interfaces." },
  { name: "Tailwind CSS", rating: 4, icon: <SiTailwindcss size={30} color="#38BDF8" />, description: "Tailwind CSS is a utility-first CSS framework." },
  { name: "Git", rating: 4, icon: <FaGitAlt size={30} color="#F05032" />, description: "Git is a version control system for tracking code changes." },
  { name: "GitHub", rating: 4, icon: <FaGithub size={30} color="#181717" />, description: "GitHub is a platform for hosting and collaborating on Git repositories." },
  { name: "MongoDB", rating: 1, icon: <SiMongodb size={30} color="#47A248" />, description: "MongoDB is a NoSQL database for storing data." },
  { name: "Express", rating: 2, icon: <SiExpress size={30} color="#000000" />, description: "Express is a web application framework for Node.js." },
  { name: "Node.js", rating: 3, icon: <FaNodeJs size={30} color="#8CC84B" />, description: "Node.js is a runtime for executing JavaScript on the server." },
  { name: "Figma", rating: 4, icon: <FaFigma size={30} color="#F24E1E" />, description: "Figma is a collaborative design tool for interface design and prototyping." },
  { name: "API Integration", rating: 3, icon: <FaNetworkWired size={30} color="#006F8E" />, description: "API integration involves connecting an application with external services to exchange data." }
];

// Skill Card Component
const SkillCard = ({ skill, index, onClick, isSelected }) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center p-4 bg-white rounded-lg w-24 h-24 mx-2 my-4 transform hover:scale-110 transition duration-300 cursor-pointer border-4 border-gray-300 overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
      onClick={() => onClick(skill)}
    >
      {/* Stars shown only when skill is selected */}
      {isSelected && (
        <div className="absolute top-[2px] left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill={i < skill.rating ? "#FFD700" : "#E0E0E0"}
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 8.91 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      )}

      {/* Skill Icon */}
      <div className="flex items-center justify-center">
        {skill.icon}
      </div>

      {/* Skill Name under the icon */}
      <div className="mt-2 text-center text-sm font-semibold text-gray-800">
        {skill.name}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    // Toggle the selected skill
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <section id="skills" className="cursor-pointer max-w-screen-lg mx-auto py-12 px-4 flex flex-col gap-12">
      {/* Introduction Section */}
      <div className="w-full mb-8 text-center">
        <h2 id="skills"  className="text-3xl font-semibold text-gray-800 mb-4">Skills Overview</h2>
        <p className="text-lg text-gray-600">
          In this section, you can explore the key skills I’ve acquired as a frontend developer.
          These are the core technologies and tools I use to build responsive, dynamic, and
          interactive web applications. Click on each skill to learn more about its purpose and
          importance in the development process.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Description Section */}
        <div className="w-full md:w-2/3">
          {selectedSkill ? (
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <div className="flex items-center justify-center">
                {selectedSkill.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedSkill.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{selectedSkill.description}</p>

                {/* Stars at the edge */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill={i < selectedSkill.rating ? "#FFD700" : "#E0E0E0"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 8.91 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-lg text-gray-600">Click on a skill to see the description.</p>
          )}
        </div>

        {/* Skills Section */}
        <div className="cursor-pointer grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              onClick={handleSkillClick}
              isSelected={selectedSkill === skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
