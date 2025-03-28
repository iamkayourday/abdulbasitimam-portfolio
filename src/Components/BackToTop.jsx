import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 100) { // Show button after scrolling 100px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <div
        onClick={handleClick}
        className="fixed bottom-2 right-6 p-4 rounded-full cursor-pointer shadow-lg  transition duration-300 bg-yellow-500 custom"
        title="Back to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-8 w-8   hover:text-white transition duration-300"
        >
          <path d="M12 19V6" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </div>
    )
  );
};

export default BackToTop;