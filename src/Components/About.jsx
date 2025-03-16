import React from 'react';
import { motion } from 'framer-motion';
import Download from './Download';


const About = () => {
  return (
    <div id='about' className="min-h-screen flex flex-col justify-center items-center py-16 pt-20 sm:pt-16">
      {/* Main Section Animation on Page Load */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 p-8"
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
              className="text-6xl font-extrabold text-yellow-500 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Abdulbasit <br /><span className='ml-20'>Kayode Imam</span> 
            </motion.h1>

            {/* Subtitle Animation */}
            <motion.h2
              className="text-xl font-medium text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Web Developer
            </motion.h2>

            {/* Description Paragraph Animation */}
            <motion.p
              className="text-lg text-white leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I'm a passionate web developer from Nigeria, focused on creating beautiful, functional, and user-friendly websites. I have experience in frontend technologies like React, HTML, CSS, and JavaScript. I enjoy crafting seamless web experiences and always strive to make the web a more accessible place for everyone.
            </motion.p>

            {/* Download Button with Animation */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 0.95 }} // Slight shrink on hover
                whileTap={{ scale: 0.9 }} // Shrink further on click
                transition={{ duration: 0.2 }}
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
