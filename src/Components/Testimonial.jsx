import React from 'react';

const Testimonial = () => {
  // Testimonial data for multiple users
  const testimonials = [
    {
      name: "John Doe",
      title: "Web Developer",
      imageUrl: "https://via.placeholder.com/150",
      text: "Tempore mollitia velit ipsum facere sequi porro commodi. Quia eos sapiente reiciendis quam voluptatum, eius expedita nemo nihil harum iure esse. Nemo.",
      rating: 4 // Rating out of 5
    },
    {
      name: "Jane Smith",
      title: "UX/UI Designer",
      imageUrl: "https://via.placeholder.com/150",
      text: "Tempore mollitia velit ipsum facere sequi porro commodi. Quia eos sapiente reiciendis quam voluptatum, eius expedita nemo nihil harum iure esse. Nemo.",
      rating: 3 // Rating out of 5
    },
    {
      name: "Alex Johnson",
      title: "Backend Developer",
      imageUrl: "https://via.placeholder.com/150",
      text: "Tempore mollitia velit ipsum facere sequi porro commodi. Quia eos sapiente reiciendis quam voluptatum, eius expedita nemo nihil harum iure esse. Nemo.",
      rating: 4 // Rating out of 5
    }
    
  ];
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 17.3l-6.4 3.4 1.2-7.1-5.1-5 7.1-1 3.1-6.3 3.1 6.3 7.1 1-5.1 5 1.2 7.1z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Section Header */}
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">What People Are Saying</h2>
        <p className="text-lg text-gray-600 mt-4">
          Here's what some of our users have to say about the project and their experience.
        </p>
      </header>

      {/* Testimonials */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center mb-4">
              {/* User Image */}
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              {/* User Info */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex mb-4">
              {renderStars(testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
