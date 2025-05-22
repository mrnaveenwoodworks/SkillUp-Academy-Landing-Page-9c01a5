import React from "react";

const CategoryCard = ({ title, description, iconName, courseCount, backgroundColor = "bg-gray-800", textColor = "text-gray-100" }) => {
  // Icon map for different category types
  const iconMap = {
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 text-indigo-400">
        <rect width="256" height="256" fill="none"/>
        <polyline points="64 88 16 128 64 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <polyline points="192 88 240 128 192 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="160" y1="40" x2="96" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
    briefcase: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 text-indigo-400">
        <rect width="256" height="256" fill="none"/>
        <rect x="32" y="72" width="192" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="32" y1="144" x2="224" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
    palette: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 text-indigo-400">
        <rect width="256" height="256" fill="none"/>
        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="224" y1="128" x2="160" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="195.9" y1="195.9" x2="150.6" y2="150.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    )
  };

  return (
    <div className={`${backgroundColor} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 relative border border-gray-700`}>
      <div className="p-6">
        {/* Icon Container */}
        <div className="mb-4 bg-gray-700/50 rounded-lg w-12 h-12 flex items-center justify-center">
          {iconMap[iconName]}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-100">{title}</h3>
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>
          
          {/* Course Count Badge */}
          <div className="inline-flex items-center bg-gray-700/50 px-3 py-1 rounded-full">
            <span className="text-sm text-indigo-300 font-medium">
              {courseCount} Courses
            </span>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <a 
            href="#" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200 group"
          >
            Explore Courses
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"/>
                <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Category Image */}
        <div className="mt-6 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDYXRlZ29yeS1yZWxhdGVkJTJCaWxsdXN0cmF0aW9ufGVufDB8fHx8MTc0NzkxOTE2OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt={`${title} category illustration`}
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105 brightness-75"
          />
        </div>

        {/* Background Gradient Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-transparent to-gray-900/20 pointer-events-none rounded-xl"></div>
      </div>

      {/* Card Border Highlight */}
      <div className="absolute inset-0 border border-indigo-500/20 rounded-xl pointer-events-none"></div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-xl"></div>
    </div>
  );
};

export default CategoryCard;