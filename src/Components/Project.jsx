import React from 'react';
import ProjectCard from './ProjectCard';  

const Projects = () => {
  // Array of project data
  const myprojects = [
    {
      title: "Abdulbasit Portfolio",
      description: "Creation 'from scratch' of my portfolio.",
      imageUrl: "abdulbasitimam-desktop.jpg",
      link: "https://abdulbasitimam.vercel.app/",
      technologies: ["React", "Tailwind Css", "Hooks"]
    },
    {
      title: "Hair by May",
      description: "Redesign of the entire website of Hair by May.Focusing mobile!",
      imageUrl: "hairbymay-desktop.jpg",
      link: "https://hairbymay.vercel.app/",
      technologies: ["React", "Tailwind Css", "Hooks"]
    },
    {
      title: "YumFind",
      description: "A web application for sharing and discovering recipes.",
      imageUrl: "yum-find-desktop.jpg",
      link: "https://yum-find.vercel.app/",
      technologies: ["React", "Tailwind Css", "Hooks"]
    },
    {
      title: "African Market",
      description: "An e-commerce platform designed to connect local vendors with customers, showcasing a variety of African products and services.",
      imageUrl: "wix.jpg",
      link: "https://abdulbasitkayode1.wixsite.com/african-marketplace?page=3",
      technologies: ["Wix"]
    }
    // Add more projects here
  ];

  return (
    <div id='projects' className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
        <p className="text-lg text-gray-600 mt-4">
          Here are some of the projects I have worked on, showcasing various technologies and solutions.
        </p>
      </header>

      {/* Projects List */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {myprojects.map((project, index) => (
            <ProjectCard key={index} projectData={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
