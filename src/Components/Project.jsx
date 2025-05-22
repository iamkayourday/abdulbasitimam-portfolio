import React, { useState } from 'react';
import ProjectCard from './ProjectCard';  

const Projects = () => {
  
  const myprojects = [
    {
      title: "Abdulbasit Portfolio",
      description: "Designed and built my personal portfolio website from scratch to showcase my skills, projects, and expertise as a frontend developer.",
      imageUrl: "abdulbasit-portfolio.avif",
      link: "https://abdulbasitimam.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },
    {
      title: "YumFind",
      description: "A recipe-sharing web application that enables users to discover, save, and manage their favorite recipes, with a focus on seamless user experience and responsive design.",
      imageUrl: "yum-find-desktop.avif",
      link: "https://yum-find.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },
    {
      title: "Hair by May",
      description: "Redesigned a mobile-first booking website with an intuitive and responsive interface, connected to Acuity Scheduler for effortless appointment scheduling and enhanced user experience.",
      imageUrl: "hairbymay-desktop.avif",
      link: "https://hairbymay.co.uk",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },
    {
      title: "Kulinary Kompass",
      description: "Kulinary Kompass is a culinary guide designed to empower young adults, especially those in care, to gain confidence in the kitchen while staying on budget.",
      imageUrl: "Kulinary-Kompass.avif",
      link: "https://kulinarykompass.co.uk/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },
    {
      title: "African Market",
      description: "An e-commerce platform to connect local vendors with customers, showcasing a wide variety of African products and services in a visually engaging manner.",
      imageUrl: "wix.avif",
      link: "https://abdulbasitkayode1.wixsite.com/african-marketplace?page=3",
      technologies: ["Wix"],
      disabled: false
    },
    {
      title: "Bridge",
      description: "A React-based website that connects Landlordsa and Tenants.",
      imageUrl: "/Bridge.avif",
      link: "https://bridge-six-gamma.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },
    {
      title: "Maid In Castle",
      description: "Maid in Castle is a professional cleaning service dedicated to creating healthier, happier homes through top-quality and eco-friendly cleaning solutions.",
      imageUrl: "Maid-in-castle.avif",
      link: "https://maidincastle.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: true
    },
    {
      title: "Detty Vip",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageUrl: "detty-vip.avif",
      link: "https://www.dettyvip.com/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: true
    },
    {
      title: "AzureCloudi",
      description: "AzureCloudi is a global cloud solutions provider specializing in secure, compliant, and cost-optimized digital transformation.",
      imageUrl: "azurecloudi.avif",
      link: "https://www.azurecloudi.com/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },
    {
      title: "Telemedics",
      description: "A virtual healthcare platform for scheduling appointments, accessing telemedicine services, and managing health records in Nigeria.",
      imageUrl: "telemedics.avif",
      link: "https://telemedics.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: true
    },
    {
      title: "Earth King",
      description: "A specialty e-commerce platform connecting global consumers with authentic African agricultural products and beauty essentials, directly sourced from Ghana and neighboring regions.",
      imageUrl: "/earth-king.avif",
      link: "https://earth-king.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: true
    },
    {
      title: "Icourse",
      description: "An e-learning platform offering courses in tech, design, and business. Designed to empower learners.",
      imageUrl: "/icourse.webp",
      link: "https://icourse-eta.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },
    {
      title: "Crimson",
      description: "A React-based e-commerce platform showcasing premium wines with immersive animations and intuitive navigation. Designed to reflect the luxury and heritage of fine winemaking.",
      imageUrl: "/crimson.avif",
      link: "https://crimson-beta.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Vercel"],
      disabled: false
    },

    
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 3); 
  };

  return (
    <div id='projects' className="container mx-auto lg:px-0 px-4 py-12 mt-20">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500">My Projects</h1>
        <p className="text-lg mt-4">
          Here are some of the projects I have worked on, showcasing various technologies and solutions.
        </p>
      </header>

      {/* Projects List */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {myprojects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} projectData={project} />
          ))}
        </div>
      </div>

      {/* Load More Button - Only show if there are more projects to load */}
      {visibleProjects < myprojects.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className="bg-yellow-600 custom hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Load More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;