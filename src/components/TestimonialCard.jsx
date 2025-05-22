import React from "react";

const TestimonialCard = ({ testimonial }) => {
  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg 
          key={`full-${i}`} 
          className="w-5 h-5 text-yellow-500" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg 
          key="half" 
          className="w-5 h-5 text-yellow-500" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`halfGradient-${testimonial.id}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#4B5563" />
            </linearGradient>
          </defs>
          <path fill={`url(#halfGradient-${testimonial.id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Add empty stars if needed
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg 
          key={`empty-${i}`} 
          className="w-5 h-5 text-gray-600" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-visible h-full flex flex-col relative border border-gray-700">
      {/* Add subtle gradient background for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl"></div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Card Header with Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
              {renderStars(testimonial.rating)}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-300">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>
          
          {/* Quote Icon */}
          <div className="bg-indigo-900/30 rounded-full p-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-indigo-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
              />
            </svg>
          </div>
        </div>
        
        {/* Quote Content */}
        <blockquote className="mb-6 flex-grow">
          <p className="relative pl-4 border-l-4 border-indigo-700 italic text-gray-300 font-medium">
            "{testimonial.quote}"
          </p>
        </blockquote>
        
        {/* Course Label */}
        {testimonial.course && (
          <div className="my-3 inline-flex items-center rounded-full bg-indigo-900/30 px-3 py-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1 text-indigo-400" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="text-sm font-medium text-indigo-300">{testimonial.course}</span>
          </div>
        )}
        
        {/* Student Info */}
        <div className="flex items-center mt-4 pt-4 border-t border-gray-700">
          {testimonial.photo ? (
            <img 
              src={testimonial.photo} 
              alt={`${testimonial.name}'s profile`}
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500 ring-2 ring-gray-900"
              loading="lazy"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center border border-gray-700">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-indigo-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
            </div>
          )}
          
          <div className="ml-4">
            <h4 className="font-semibold text-gray-100">{testimonial.name}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm">
              <span className="text-indigo-400 font-medium">{testimonial.role}</span>
              {testimonial.company && (
                <>
                  <span className="hidden sm:inline mx-2 text-gray-500">•</span>
                  <span className="text-gray-400">{testimonial.company}</span>
                </>
              )}
              {testimonial.location && (
                <span className="text-gray-500 text-xs mt-1 sm:mt-0 sm:ml-2">
                  {testimonial.location}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Outcome Badge */}
      {testimonial.outcome && (
        <div className="px-6 pb-6 mt-2 relative z-10">
          <div className="flex items-center bg-green-900/20 rounded-lg p-3 border border-green-700/30">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-green-500" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="ml-2 text-sm font-medium text-green-400">
              {testimonial.outcome}
            </span>
          </div>
        </div>
      )}
      
      {/* Company Logo if applicable */}
      {testimonial.companyLogo && (
        <div className="px-6 pb-6 relative z-10">
          <div className="border-t border-gray-700 pt-4">
            <img 
              src={testimonial.companyLogo} 
              alt={`${testimonial.company} logo`} 
              className="h-8 object-contain opacity-80 brightness-150 contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Highlight glow on hover */}
      <div className="absolute inset-0 bg-indigo-500/5 opacity-0 hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
    </div>
  );
};

export default TestimonialCard;