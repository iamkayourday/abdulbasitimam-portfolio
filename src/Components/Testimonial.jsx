import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  // Updated testimonial data with real content
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Abdulbasit transformed our web presence with his exceptional frontend skills. His attention to detail and clean code made our project a success beyond expectations.",
      image: "/man.webp",
      name: "Kwame Joseph",
      role: "Restaurant Owner",
      project: "Hair by May"
    },
    {
      id: 2,
      rating: 5,
      text: "Working with Abdulbasit was a game-changer for our recipe platform. He delivered a responsive, user-friendly interface that our users absolutely love.",
      image: "/man.webp",
      name: "Richard Mills",
      role: "Project Manager",
      project: "YumFind"
    },
    {
      id: 3,
      rating: 5,
      text: "The portfolio Abdulbasit created perfectly captures our brand identity. His technical expertise and design sensibility are truly impressive.",
      image: "/woman.webp",
      name: "Regina Miles",
      role: "Marketing Director",
      project: "AzureCloudi"
    },
    {
      id: 4,
      rating: 5,
      text: "Abdulbasit's full-stack capabilities shone through in our inventory system. He handled both frontend and backend with remarkable skill and professionalism.",
      image: "/man.webp",
      name: "Michael Brown",
      role: "Operations Manager",
      project: "Stockly"
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex justify-center space-x-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "text-yellow-500 fill-current"
              : "text-gray-300 fill-current"
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-2xl shadow-lg border-2 custom-border p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 custom-text">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>
      </div>

      {/* Star Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Testimonial Text */}
      <p className=" text-center leading-relaxed flex-grow mb-6">
        "{testimonial.text}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
        />
        <div className="flex-1">
          <p className="font-semibold custom-text text-yellow-400">{testimonial.name}</p>
          <p className="text-sm ">{testimonial.role}</p>
          <p className="text-xs text-yellow-400 custom-text font-medium mt-1">
            {testimonial.project}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="testimonial" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold custom-text mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what clients and collaborators 
            have to say about working with me.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="overflow-x-auto no-scrollbar snap-x flex space-x-6 pb-4 -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="snap-center flex-shrink-0 w-[85vw]">
                <TestimonialCard 
                  testimonial={testimonial} 
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">Swipe to explore more testimonials →</p>
          </div>
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <p className="">
            <span className="font-semibold custom-text">100% Client Satisfaction</span> • 
            <span className="mx-2">•</span>
            <span className="font-semibold custom-text">12+ Projects Delivered</span> • 
            <span className="mx-2">•</span>
            <span className="font-semibold custom-text">5-Star Rated</span>
          </p>
        </motion.div>
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;