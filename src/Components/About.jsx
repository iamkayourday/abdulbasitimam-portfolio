import React from 'react';
import { motion } from 'framer-motion';
import Download from './Download';
import ThemeSwitcher from './ThemeSwitcher';

const About = () => {
  return (
    <div id='about' className="min-h-screen flex flex-col justify-center items-center py-16 pt-20 sm:pt-16">
      {/* Main Section Animation on Page Load */}
      <motion.div
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 p-8"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}  
      >
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          
          {/* Profile Image without Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src='portrait.png'
              alt="Abdulbasit"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Introduction Section */}
          <div className="w-full lg:w-1/2">
            {/* Name Animation */}
            <motion.h1
              className="lg:text-6xl md:text-4xl text-4xl font-extrabold text-[#e8c826] mb-4 text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Abdulbasit <br /><span className='md:ml-20'>Kayode Imam</span> 
            </motion.h1>

            {/* Subtitle Animation */}
            <motion.h2
              className="font-medium mb-6 sm:text-center lg:text-left mt-10 md:text-4xl text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Web Developer
            </motion.h2>

            {/* Description Paragraph Animation */}
            <motion.p
              className="text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I'm a passionate web developer from Nigeria, focused on creating beautiful, functional, and user-friendly websites. I have experience in frontend technologies like React, HTML, CSS, and JavaScript. I enjoy crafting seamless web experiences and always strive to make the web a more accessible place for everyone.
            </motion.p>

            {/* Button Container with proper spacing */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 md:gap-[28rem]">
              {/* Theme Switcher - Left side */}
              <div className="order-2 sm:order-1">
                <ThemeSwitcher />
              </div>

              {/* Download Button - Right side with spacing */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="order-1 sm:order-2 ml-0 sm:ml-6"
              >
                <Download />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;