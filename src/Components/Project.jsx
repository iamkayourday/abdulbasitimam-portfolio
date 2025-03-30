import React from 'react';
import ProjectCard from './ProjectCard';  

const Projects = () => {
  // Array of project data
  const myprojects = [
    {
      title: "Abdulbasit Portfolio",
      description: "Designed and built my personal portfolio website from scratch to showcase my skills, projects, and expertise as a frontend developer.",
      imageUrl: "abdulbasitimam-desktop.avif",
      link: "https://abdulbasitimam.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Hooks", "Vercel"]
    },
    {
      title: "YumFind",
      description: "A recipe-sharing web application that enables users to discover, save, and manage their favorite recipes, with a focus on seamless user experience and responsive design.",
      imageUrl: "yum-find-desktop.avif",
      link: "https://yum-find.vercel.app/",
            technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Hooks", "Vercel"]

    },
    {
      title: "Hair by May",
      description: "Redesigned a mobile-first booking website with an intuitive and responsive interface, connected to Acuity Scheduler for effortless appointment scheduling and enhanced user experience.",
      imageUrl: "hairbymay-desktop.avif",
      link: "https://hairbymay.vercel.app/",
            technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Hooks", "Vercel"]

    },
    {
      title: "Kulinary Kompass",
      description: "Kulinary Kompass is a culinary guide designed to empower young adults, especially those in care, to gain confidence in the kitchen while staying on budget.",
      imageUrl: "Kulinary-Kompass.avif",
      link: "https://kulinarykompass.co.uk/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Hooks", "Vercel"]
    },
    {
      title: "Maid In Castle",
      description: "Maid in Castle is a professional cleaning service dedicated to creating healthier, happier homes through top-quality and eco-friendly cleaning solutions.",
      imageUrl: "Maid-in-castle.avif",
      link: "https://maidincastle.vercel.app/",
      technologies: ["Html", "Css", "JavaScript", "React", "Tailwind-Css", "Hooks", "Vercel"]
    },
    {
      title: "African Market",
      description: "An e-commerce platform to connect local vendors with customers, showcasing a wide variety of African products and services in a visually engaging manner.",
      imageUrl: "wix.avif",
      link: "https://abdulbasitkayode1.wixsite.com/african-marketplace?page=3",
      technologies: ["Wix"]
    },
    // {
    //   title: "Detty Vip",
    //   description: "An e-commerce platform to connect local vendors with customers, showcasing a wide variety of African products and services in a visually engaging manner.",
    //   imageUrl: "wix.avif",
    //   link: "https://abdulbasitkayode1.wixsite.com/african-marketplace?page=3",
    //   technologies: ["Wix"]
    // },
    // {
    //   title: "AzureCloudi",
    //   description: "An e-commerce platform to connect local vendors with customers, showcasing a wide variety of African products and services in a visually engaging manner.",
    //   imageUrl: "wix.avif",
    //   link: "https://abdulbasitkayode1.wixsite.com/african-marketplace?page=3",
    //   technologies: ["Wix"]
    // },

    // Add more projects here
  ];

  return (
    <div id='projects' className="container mx-auto lg:px-0 px-4 py-12 mt-20">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500">My Projects</h1>
        <p className="text-lg  mt-4">
          Here are some of the projects I have worked on, showcasing various technologies and solutions.
        </p>
      </header>

      {/* Projects List */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {myprojects.map((project, index) => (
            <ProjectCard key={index} projectData={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
