import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaRocket, FaHandHoldingHeart, FaHeart } from "react-icons/fa"; // React Icons


const BentoGrid = () => {
  
  const handleScrollToSection = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-y-20 justify-center items-center max-w-7xl mx-auto mt-20 lg:mt-32 h-fit">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full max-w-7xl mx-auto px-4">
        {/* Experience Card */}
        <motion.div
          className="group bg-yellow-400 relative overflow-hidden rounded-2xl shadow-lg p-7 bg-gradient-to-br from-primary to-secondary backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-2 row-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex flex-row items-center gap-x-7 justify-between h-full w-full font-bold text-white ">
            <p className="text-[10rem] lg:text-[8rem] 2xl:text-[15rem]">2</p>
            <div className="flex flex-col justify-center items-start text-xl 2xl:text-3xl">
              <p>years of</p>
              <p>experience</p>
            </div>
          </div>
          <div className="absolute border-[1.25rem]  top-[-40%] right-[-40%] h-[80%] w-[80%] rounded-full transition-colors duration-1000"></div>
        </motion.div>

        {/* Developer Card */}
        <motion.div
          className="rounded-2xl shadow-lg p-5 bg-yellow-500 backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-2 py-24 md:py-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full font-bold text-white">
            <p className="text-xl lg:text-2xl 2xl:text-3xl">Developer</p>
            <p className="font-mono text-3xl lg:text-3xl uppercase text-nowrap">
              &ldquo;Frontend-Developer&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Student Card */}
        <motion.div
          className="rounded-2xl shadow-lg p-5 bg-yellow-500 backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full font-bold text-white py-24 md:py-0">
            <p className="text-xl lg:text-2xl 2xl:text-3xl">Student at</p>
            <p className="font-mono text-3xl lg:text-4xl 2xl:text-5xl uppercase">
              {"{ ALX }"}
            </p>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          className="group bg-yellow-400 relative overflow-hidden rounded-2xl shadow-lg p-7 bg-gradient-to-br from-primary to-secondary backdrop-blur-md hover:saturate-200 transition-all duration-500 col-span-2 row-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full font-bold text-white">
            <div className="flex flex-col gap-y-1 items-start justify-center w-full">
              <p className="text-3xl">Contributed</p>
              <p className="text-3xl">to</p>
            </div>
            <div className="flex flex-col justify-center w-full items-end">
              <p className="text-[6rem] lg:text-[5rem] 2xl:text-[8rem]">12</p>
              <p className="text-3xl">websites</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="opacity-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="#contact"
          onClick={(e) => handleScrollToSection(e, "contact")}
          className="clickable hover-scale-effect cursor-pointer"
        >
          <h4 className="text-xl md:text-3xl lg:text-4xl text-white hover:tracking-widest transition-all duration-500 hover:underline">
            Wanna work with me?
          </h4>
        </a>
      </motion.div>
    </div>
  );
};

export default BentoGrid;