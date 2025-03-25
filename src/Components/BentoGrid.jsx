import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaRocket, FaHandHoldingHeart, FaHeart } from "react-icons/fa";

const BentoGrid = () => {
  const handleScrollToSection = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-y-16 justify-center items-center max-w-7xl mx-auto mt-10 lg:mt-16 px-4 md:px-6 lg:px-8">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Experience Card */}
        <motion.div
          className="group bg-yellow-400 relative overflow-hidden rounded-2xl shadow-lg p-5 md:p-7 lg:p-10 bg-gradient-to-br from-primary to-secondary backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex flex-row items-center gap-x-5 md:gap-x-7 justify-between h-full w-full font-bold text-white p-14">
            <p className="text-5xl md:text-7xl lg:text-[8rem] 2xl:text-[12rem]">2</p>
            <div className="flex flex-col justify-center items-start text-lg md:text-xl lg:text-2xl">
              <p>years of</p>
              <p>experience</p>
            </div>
          </div>
          <div className="absolute border-[1.25rem] top-[-40%] right-[-40%] h-[80%] w-[80%] rounded-full transition-colors duration-1000"></div>
        </motion.div>

        {/* Developer Card */}
        <motion.div
          className="rounded-2xl shadow-lg p-5 md:p-7 lg:p-10 bg-yellow-500 backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-1 md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full font-bold text-white py-14">
            <p className="text-lg md:text-xl lg:text-2xl">Developer</p>
            <p className="font-mono text-xl md:text-2xl lg:text-3xl uppercase text-center">
              &ldquo;Frontend-Developer&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Student Card */}
        <motion.div
          className="rounded-2xl shadow-lg p-5 md:p-7 lg:p-10 bg-yellow-500 backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-1 md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full font-bold text-white py-14">
            <p className="text-lg md:text-xl lg:text-2xl">Student at</p>
            <p className="font-mono text-2xl md:text-3xl lg:text-5xl uppercase">
              {"{ ALX }"}
            </p>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          className="group bg-yellow-400 relative overflow-hidden rounded-2xl shadow-lg p-5 md:p-7 lg:p-10 bg-gradient-to-br from-primary to-secondary backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-1 md:col-span-4 lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full font-bold text-white py-14">
            <div className="flex flex-col  items-start justify-center w-full ">
              <p className="text-xl md:text-2xl lg:text-3xl">Contributed</p>
              <p className="text-xl md:text-2xl lg:text-3xl">to</p>
            </div>
            <div className="flex flex-col justify-center items-end w-full">
              <p className="text-5xl md:text-[5rem] lg:text-[8rem]">12</p>
              <p className="text-xl md:text-2xl lg:text-3xl">websites</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="opacity-0 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="#contact"
          onClick={(e) => handleScrollToSection(e, "contact")}
          className="clickable cursor-pointer text-xl md:text-3xl lg:text-4xl text-yellow-500 hover:tracking-widest transition-all duration-500 hover:underline"
        >
          Wanna work with me?
        </a>
      </motion.div>
    </div>
  );
};

export default BentoGrid;