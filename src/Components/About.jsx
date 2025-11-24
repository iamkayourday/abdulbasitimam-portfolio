import React from 'react';
import { motion } from 'framer-motion';
import Download from './Download';
import ThemeSwitcher from './ThemeSwitcher';

const About = () => {
  // Animation variants for consistent transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Dynamic availability status
  const isAvailableForWork = true; // Change this to false when not available

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-16 pt-20 sm:pt-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Main Container */}
      <motion.div
        className="w-full max-w-[90rem] mx-auto p-4 sm:p-6 lg:p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column (Image + Theme Switcher for desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
            <motion.div className="w-full flex justify-center" variants={itemVariants}>
              <img
                src="abdulbasit.png"
                alt="Abdulbasit Kayode Imam"
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
                width={500}
                height={500}
              />
            </motion.div>

            <motion.div className="hidden lg:block mt-20 lg:-ml-96" variants={itemVariants}>
              <ThemeSwitcher />
            </motion.div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            
            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#e8c826] mb-2 sm:mb-4 text-center lg:text-left"
              variants={itemVariants}
            >
              <span className="block">Abdulbasit</span>
              <span className="block lg:ml-12 xl:ml-20 mt-2 sm:mt-3">
                Kayode Imam
              </span>
            </motion.h1>

            {/* Subtitle with Dynamic Availability */}
            <motion.div variants={itemVariants}>
              <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl text-center lg:text-left mt-6 sm:mt-10 mb-4">
                Full-Stack Developer
              </h2>
              
              {/* Availability Status */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium w-fit mx-auto lg:mx-0 ${
                isAvailableForWork ? 'bg-green-500' : 'bg-red-500'
              }`}>
                <span className={`w-2 h-2 bg-white rounded-full animate-pulse ${
                  isAvailableForWork ? 'animate-pulse' : 'animate-none'
                }`}></span>
                {isAvailableForWork ? 'Available for work' : 'Not available for work'}
              </div>
            </motion.div>

            {/* Updated Description for Full-Stack Developer */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed sm:leading-loose mb-6 sm:mb-8"
              variants={itemVariants}
            >
              I'm a full-stack developer from Nigeria with experience building 
              modern, scalable, and user-focused web applications. I started as a 
              frontend developer working with React, JavaScript, HTML, and CSS, and 
              later expanded into backend development using Python, Django, Django 
              REST Framework, and JWT authentication.  
              <br /><br />
              I enjoy turning ideas into real products from clean interfaces to 
              powerful APIs and I'm passionate about creating solutions that are 
              fast, reliable, and accessible to everyone.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-6"
              variants={itemVariants}
            >
              {/* Download Button */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Download />
              </motion.div>

              {/* Mobile Theme Switcher */}
              <motion.div className="block lg:hidden" variants={itemVariants}>
                <ThemeSwitcher />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;