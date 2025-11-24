import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaServer, FaDesktop } from 'react-icons/fa';

const Projects = () => {
  const myprojects = [
    {
      title: "Stockly",
      description: "A full-stack inventory management system with real-time tracking, supplier management, and sales analytics. Built with React frontend and Django REST Framework backend.",
      imageUrl: "stockly.avif",
      link: "https://stockly-app.vercel.app/",
      github: "https://github.com/yourusername/stockly",
      technologies: ["React", "Django REST", "PostgreSQL", "Tailwind CSS", "JWT Auth"],
      category: "fullstack",
      featured: true,
      disabled: false
    },
    {
      title: "Abdulbasit Portfolio",
      description: "Designed and built my personal portfolio website from scratch to showcase my skills, projects, and expertise as a full-stack developer.",
      imageUrl: "abdulbasit-portfolio.avif",
      link: "https://abdulbasitimam.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "frontend",
      featured: true,
      disabled: false
    },
    {
      title: "YumFind",
      description: "A recipe-sharing web application that enables users to discover, save, and manage their favorite recipes with seamless user experience and responsive design.",
      imageUrl: "yum-find-desktop.avif",
      link: "https://yum-find.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Context API", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "AzureCloudi",
      description: "AzureCloudi is a global cloud solutions provider specializing in secure, compliant, and cost-optimized digital transformation.",
      imageUrl: "azurecloudi.avif",
      link: "https://www.azurecloudi.com/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "Hair by May",
      description: "Redesigned a mobile-first booking website with intuitive interface, connected to Acuity Scheduler for effortless appointment scheduling.",
      imageUrl: "hairbymay-desktop.avif",
      link: "https://hairbymay.co.uk",
      technologies: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "Kulinary Kompass",
      description: "A culinary guide designed to empower young adults to gain confidence in the kitchen while staying on budget.",
      imageUrl: "Kulinary-Kompass.avif",
      link: "https://kulinarykompass.co.uk/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "Icourse",
      description: "An e-learning platform offering courses in tech, design, and business. Designed to empower learners with interactive content.",
      imageUrl: "/icourse.webp",
      link: "https://icourse-eta.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "Crimson",
      description: "A React-based e-commerce platform showcasing premium wines with immersive animations and intuitive navigation.",
      imageUrl: "/crimson.avif",
      link: "https://crimson-beta.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "Bridge",
      description: "A React-based website that connects Landlords and Tenants with streamlined property management features.",
      imageUrl: "/Bridge.avif",
      link: "https://bridge-six-gamma.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "African Market",
      description: "An e-commerce platform to connect local vendors with customers, showcasing African products and services.",
      imageUrl: "wix.avif",
      link: "https://abdulbasitkayode1.wixsite.com/african-marketplace",
      technologies: ["Wix"],
      category: "frontend",
      featured: false,
      disabled: false
    },
    {
      title: "Maid In Castle",
      description: "Professional cleaning service dedicated to creating healthier, happier homes through top-quality eco-friendly solutions.",
      imageUrl: "Maid-in-castle.avif",
      link: "https://maidincastle.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: true
    },
    {
      title: "Telemedics",
      description: "A virtual healthcare platform for scheduling appointments, accessing telemedicine services, and managing health records.",
      imageUrl: "telemedics.avif",
      link: "https://telemedics.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: true
    },
    {
      title: "Earth King",
      description: "E-commerce platform connecting global consumers with authentic African agricultural products and beauty essentials.",
      imageUrl: "/earth-king.avif",
      link: "https://earth-king.vercel.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      disabled: true
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: myprojects.length },
    { id: 'fullstack', label: 'Full-Stack', count: myprojects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: myprojects.filter(p => p.category === 'frontend').length },
    { id: 'featured', label: 'Featured', count: myprojects.filter(p => p.featured).length }
  ];

  const filteredProjects = myprojects.filter(project => 
    activeFilter === 'all' ? true :
    activeFilter === 'featured' ? project.featured :
    project.category === activeFilter
  );

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl shadow-lg border-2 custom-border border-yellow-400 overflow-hidden hover:shadow-xl transition-all duration-300 ${
        project.disabled ? 'opacity-60' : 'hover:scale-105'
      }`}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Featured
            </span>
          )}
          {project.disabled && (
            <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Coming Soon
            </span>
          )}
        </div>

        {/* Category Icon */}
        <div className="absolute top-3 right-3">
          {project.category === 'fullstack' ? (
            <FaServer className="text-white text-lg" />
          ) : (
            <FaDesktop className="text-white text-lg" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold  mb-2 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-gray-500 text-xs font-medium px-2 py-1">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => !project.disabled && window.open(project.link, '_blank')}
            disabled={project.disabled}
            className={`flex items-center gap-2 flex-1 justify-center py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
              project.disabled
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'custom bg-yellow-400 text-white hover:shadow-lg transform hover:scale-105'
            }`}
          >
            <FaExternalLinkAlt className="text-sm" />
            {project.disabled ? 'Coming Soon' : 'Live Demo'}
          </button>
          
          {project.github && !project.disabled && (
            <button
              onClick={() => window.open(project.github, '_blank')}
              className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub className="text-sm" />
              Code
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 custom-text mb-6">
            My Projects
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my journey from frontend to full-stack development, featuring responsive designs, 
            modern technologies, and real-world solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setVisibleProjects(6);
              }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-yellow-400 custom text-white shadow-lg'
                  : 'border border-gray-200 hover:border-gray-300'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsToShow.map((project, index) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={showMoreProjects}
              className="custom bg-yellow-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;