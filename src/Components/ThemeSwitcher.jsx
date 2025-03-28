import React, { useState, useEffect } from 'react';
import { FaPalette } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('default');

  const themes = [
    { name: 'default', bg: 'bg-yellow-500', border: 'border-yellow-500' },
    { name: 'green', bg: 'bg-[#606c38]', border: 'border-[#606c38]' },
    { name: 'gray', bg: 'bg-[#808080]', border: 'border-[#808080]' },
    { name: 'purple', bg: 'bg-[#240046]', border: 'border-[#240046]'},
    { name: 'orange', bg: 'bg-[#e36414]', border: 'border-[#e36414]'},
    { name: 'red', bg: 'bg-[#9d0208]', border: 'border-[#9d0208]'},
    { name: 'light-blue', bg: 'bg-[#a2d2ff]', border: 'border-[#a2d2ff]'},
    { name: 'pink', bg: 'bg-[#edafb8]', border: 'border-[#edafb8]'},
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    const newClasses = [savedTheme];
    if (savedDarkMode) newClasses.push('dark');

    document.documentElement.className = newClasses.join(' ');
    setTheme(savedTheme);
  }, []);

  const toggleTheme = (selectedTheme) => {
    const darkMode = document.documentElement.classList.contains('dark');
    const newClasses = [selectedTheme];
    if (darkMode) newClasses.push('dark');

    document.documentElement.className = newClasses.join(' ');
    localStorage.setItem('theme', selectedTheme);
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {/* Main Theme Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 mt-20 md:mt-0 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 bg-yellow-500 custom"
        aria-label="Change theme"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPalette size={24} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile & Tablet - Circular Layout */}
            <motion.div
              className="lg:hidden absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {themes.map((t, index) => {
                const angle = (index * (360 / themes.length)) * (Math.PI / 180);
                const radius = 80;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <motion.button
                    key={t.name}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x, y, opacity: 1 }}
                    exit={{ x: 0, y: 0, opacity: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 12px rgba(255,255,255,0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleTheme(t.name)}
                    className={`absolute w-10 h-10 border-2 ${t.border} rounded-lg flex items-center justify-center shadow-lg ${t.bg} ${theme === t.name ? 'ring-2 ring-white/50' : ''}`}
                    aria-label={`${t.name} theme`}
                  />
                );
              })}
            </motion.div>

            {/* Desktop - Horizontal Layout */}
            <motion.div
              className="hidden lg:flex absolute bottom-0 left-14 gap-2 bg-yellow-900 custom backdrop-blur-0 p-2 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {themes.map((t) => (
                <motion.button
                  key={t.name}
                  whileHover={{ scale: 1.15, boxShadow: "0 0 12px rgba(255,255,255,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleTheme(t.name)}
                  className={`w-8 h-8 border-2 ${t.border} rounded-md flex items-center justify-center shadow-lg p-2 ${t.bg}  ${theme === t.name ? 'ring-2 ring-white/50' : ''}`}
                  aria-label={`${t.name} theme`}
                />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
