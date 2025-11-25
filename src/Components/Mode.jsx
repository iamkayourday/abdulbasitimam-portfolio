import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Mode = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check local storage and apply dark mode if it's set
  useEffect(() => {
    const storedMode = localStorage.getItem('dark-mode');
    if (storedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); 
    }
  }, []);

  // Toggle dark mode
  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
    const newMode = !isDarkMode;

    // Update local storage
    localStorage.setItem('dark-mode', newMode);
    if (newMode) {
      document.documentElement.classList.add('dark'); 
    } else {
      document.documentElement.classList.remove('dark'); 
    }
  };

  return (
    <button aria-label="Toggle dark mode"  onClick={toggleMode}  className="p-2">
      {isDarkMode ? <FaMoon className="text-[#1e1e1f]" /> :  <FaSun className="text-white" />}
    </button>
  );
};

export default Mode;
