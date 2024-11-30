import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ColorIcon = () => {
  const [showColors, setShowColors] = useState(false);

  // Color palette for the boxes
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8D33",
    "#33FFF2", "#F233FF", "#8D33FF", "#FF8DFF"
  ];

  return (
    <div className="relative flex justify-center items-center">
      {/* Color Icon */}
      <motion.div
        className="w-12 h-12 rounded-full bg-gray-800 cursor-pointer flex justify-center items-center"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }} // Slightly enlarge on hover
        whileTap={{ scale: 0.9 }} // Shrink on click
        onClick={() => setShowColors(!showColors)} // Toggle color boxes
        transition={{ duration: 0.2 }}
      >
        <span className="text-white text-lg">🎨</span>
      </motion.div>

      {/* Color Boxes - Only show when the icon is clicked */}
      {showColors && (
        <div className="absolute flex justify-center items-center">
          {/* Mobile: Circular arrangement of color boxes */}
          <div
            className="absolute flex justify-center items-center"
            style={{
              width: '150px', // Adjust the radius of the circle
              height: '150px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full"
                style={{
                  backgroundColor: color,
                  position: 'absolute',
                  top: `${50 + 40 * Math.sin((index * 2 * Math.PI) / colors.length)}%`,
                  left: `${50 + 40 * Math.cos((index * 2 * Math.PI) / colors.length)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-md"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorIcon;
