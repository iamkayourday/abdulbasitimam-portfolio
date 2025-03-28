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

  return (
    <section id='about' className="min-h-screen flex flex-col justify-center items-center py-16 pt-20 sm:pt-16 px-4 sm:px-6 lg:px-8">
      {/* Main Container with responsive padding */}
      <motion.div
        className="w-full max-w-[90rem] mx-auto p-4 sm:p-6 lg:p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Flex Container - column on mobile, row on lg+ */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column (Image + ThemeSwitcher on desktop) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
            {/* Profile Image - responsive sizing */}
            <motion.div 
              className="w-full flex justify-center"
              variants={itemVariants}
            >
              <img
                src='portrait.webp'
                alt="Abdulbasit Kayode Imam"
                className="w-full max-w-md lg:max-w-full h-auto rounded-lg object-cover"
              />
            </motion.div>

            {/* Theme Switcher - visible only on desktop under image */}
            <motion.div 
              className="hidden lg:block mt-20 lg:-ml-96"
              variants={itemVariants}
            >
              <ThemeSwitcher />
            </motion.div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            {/* Name with responsive text sizing */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#e8c826] mb-2 sm:mb-4 text-center lg:text-left"
              variants={itemVariants}
            >
              <span className="block">Abdulbasit</span>
              <span className="block lg:ml-12 xl:ml-20 mt-2 sm:mt-3">Kayode Imam</span> 
            </motion.h1>

            {/* Subtitle with responsive sizing */}
            <motion.h2
              className="font-medium text-2xl sm:text-3xl md:text-4xl text-center lg:text-left mt-6 sm:mt-10"
              variants={itemVariants}
            >
              Web Developer
            </motion.h2>

            {/* Description with responsive text sizing */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed sm:leading-loose mb-6 sm:mb-8"
              variants={itemVariants}
            >
              I'm a passionate web developer from Nigeria, focused on creating beautiful, functional, and user-friendly websites. I have experience in frontend technologies like React, HTML, CSS, and JavaScript. I enjoy crafting seamless web experiences and always strive to make the web a more accessible place for everyone.
            </motion.p>

            {/* Button Container - responsive layout */}
            <motion.div
              className="flex flex-col items-center sm:items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6"
              variants={itemVariants}
            >
              {/* Download Button with hover animations */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Download />
              </motion.div>

              {/* Theme Switcher - Visible on mobile & tablet, hidden on desktop */}
              <motion.div 
                className="block lg:hidden"
                variants={itemVariants}
              >
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
