import React from 'react';
import ProjectCard from './ProjectCard';  // Importing the ProjectCard component

const Projects = () => {
  // Array of project data
  const myprojects = [
    {
      title: "Recipe Sharing App",
      description: "A web application for sharing and discovering recipes.",
      imageUrl: "https://via.placeholder.com/600x400",
      link: "https://your-recipe-app.com",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Manager",
      description: "A web-based task manager app for organizing daily tasks.",
      imageUrl: "https://via.placeholder.com/600x400",
      link: "https://your-task-manager.com",
      technologies: ["React", "Express", "MongoDB"]
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
