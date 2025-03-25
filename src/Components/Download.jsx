import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => {
        // Trigger the CV download
        const cvUrl = "/path-to-your-cv.pdf"; 
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Abdulbasit-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden text-white bg-yellow-500 hover:bg-yellow-600 py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 w-[200px] h-[50px]"
    >
      {/* Animated White Background */}
      <span
        className={`absolute inset-0 h-full w-full bg-white transform transition-transform duration-300 ease-out ${
          isHovered ? "translate-x-0" : "-translate-x-full"
        }`}
      ></span>

      {/* Yellow Border/Frame */}
      <span
        className="absolute inset-0 border-32 border-yellow-500 rounded-lg"
      ></span>

      {/* Icon and Text */}
      <span
        className={`relative z-10 flex items-center gap-2 transition-all duration-300 ${
          isHovered ? "text-black" : "text-white"
        }`}
      >
        {!isHovered && "Download CV"}
        <FaDownload style={{ fontSize: "20px" }} />
      </span>
    </button>
  );
};

export default DownloadButton;