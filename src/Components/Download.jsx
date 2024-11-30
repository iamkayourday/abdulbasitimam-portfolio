import { useState } from "react";
import { FaDownload } from "react-icons/fa"; // FontAwesome download icon

const DownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => {
        // Trigger the CV download
        const cvUrl = "/path-to-your-cv.pdf"; // Replace with actual CV file path
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Abdulbasit.pdf"; // Optional: specify the file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-black bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center w-[200px] h-[50px] overflow-hidden"
    >
      {/* Text and icon */}
      <span
        className={`transition-all duration-300 ${isHovered ? "opacity-0" : "opacity-100"} flex items-center gap-2`}
      >
        Download CV
        <FaDownload
          className="transition-all duration-300 opacity-100"
        />
      </span>

      {/* Only icon in the center when hovered */}
      <FaDownload
        className={`transition-all duration-300 absolute inset-0 m-auto opacity-0 ${isHovered ? "opacity-100" : ""}`}
        style={{ fontSize: "20px" }}
      />
    </button>
  );
};

export default DownloadButton;
