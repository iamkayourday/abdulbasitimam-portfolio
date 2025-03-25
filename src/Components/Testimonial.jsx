
import React from 'react';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      rating: 3,
      text:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
      image: '/man.png',
      name: 'Kwame Joseph',
      role: 'Chef',
    },
    {
      id: 2,
      rating: 4,
      text:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
      image: '/man.png',
      name: 'Richard Mills',
      role: 'Nutritionist',
    },
    {
      id: 3,
      rating: 5,
      text:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
      image: '/man.png',
      name: 'Regina Miles',
      role: 'Food Blogger',
    },
    {
      id: 4,
      rating: 4,
      text:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
      image: '/man.png',
      name: 'Michael Brown',
      role: 'Restaurant Owner',
    },
  ];

  return (
    <div id='testimonials' className="py-12 px-4 md:px-8 lg:px-16 mt-40 ">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-yellow-500 mb-4">
        What People Are Saying
        </h2>
        <p className='text-center text-white mb-8'>Here's what some of our users have to say about the project and their experience.

</p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" p-12 rounded-lg shadow-md flex flex-col space-y-4"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 mx-auto">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-yellow-400 stroke-current stroke-1 fill-transparent'
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 text-center">{testimonial.text}</p>

              {/* Customer Image, Name, and Role */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-yellow-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden overflow-x-auto .no-scrollbar scrollbar-hide snap-x flex space-x-6 mt-8 px-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[300px] bg-[#111319] shadow-lg rounded-lg p-10 flex-shrink-0 snap-center"
            >
              {/* Star Rating */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-yellow-400 stroke-current stroke-1 fill-transparent'
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gay-200 mt-2 text-gray-200">{testimonial.text}</p>

              {/* Customer Image, Name, and Role */}
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-yellow-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
