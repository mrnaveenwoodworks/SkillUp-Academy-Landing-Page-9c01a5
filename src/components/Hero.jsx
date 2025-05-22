import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ensure hero section remains visible
    setIsVisible(true);
  }, []);

  return (
    <section 
      className={`relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-72 h-72 bg-indigo-900/30 rounded-full -mr-24 -mt-24 opacity-30"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-indigo-900/20 rounded-full -ml-48 -mb-48 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div 
              className="inline-flex items-center bg-indigo-900/50 rounded-full px-4 py-1 mb-6 transform transition-transform duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="text-indigo-300">
                <rect width="256" height="256" fill="none"/>
                <line x1="144" y1="228" x2="112" y2="228" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                <circle cx="128" cy="100" r="16"/>
                <path d="M94.81,192C37.52,95.32,103.87,32.53,123.09,17.68a8,8,0,0,1,9.82,0C152.13,32.53,218.48,95.32,161.19,192Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
              </svg>
              <span className="ml-2 text-xs font-semibold text-indigo-300">Start Learning Today</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6 leading-tight animate-fade-in">
              Transform Your Future with 
              <span className="relative inline-block">
                <span className="relative z-10 text-indigo-400"> Expert-Led Learning</span>
                <svg className="absolute bottom-0 left-0 w-full h-3 text-indigo-900/50 -z-10" viewBox="0 0 300 12" fill="currentColor">
                  <path d="M0,10 Q150,0 300,10" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in-delay">
              Join over 100,000 learners who have advanced their careers through our industry-recognized courses. Master new skills at your own pace.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-delay">
              <button 
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-900/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="flex items-center justify-center">
                  Explore Courses
                  {isHovered && (
                    <span className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
                        <rect width="256" height="256" fill="none"/>
                        <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                      </svg>
                    </span>
                  )}
                </span>
              </button>
              <button 
                className="px-8 py-4 bg-gray-800 text-indigo-300 font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-700 border-2 border-indigo-600 transform hover:scale-105"
              >
                View Free Resources
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 animate-fade-in-delay-2">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8">
                {/* Company Logos - Using brightness/contrast filters for dark theme */}
                <img 
                  src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxHb29nbGUlMkJsb2dvJTJCaW4lMkJncmF5c2NhbGV8ZW58MHx8fHwxNzQ3OTIwMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Google"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer brightness-150 contrast-125"
                />
                <img 
                  src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMkJsb2dvJTJCaW4lMkJncmF5c2NhbGV8ZW58MHx8fHwxNzQ3OTIwMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Microsoft"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer brightness-150 contrast-125"
                />
                <img 
                  src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxBZG9iZSUyQmxvZ28lMkJpbiUyQmdyYXlzY2FsZXxlbnwwfHx8fDE3NDc5MjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Adobe"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer brightness-150 contrast-125"
                />
                <img 
                  src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxBbWF6b24lMkJsb2dvJTJCaW4lMkJncmF5c2NhbGV8ZW58MHx8fHwxNzQ3OTIwMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Amazon"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer brightness-150 contrast-125"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-delay">
            <div className="relative z-10 transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTdHVkZW50JTJCbGVhcm5pbmclMkJvbiUyQmxhcHRvcCUyQndpdGglMkJVSSUyQmVsZW1lbnRzJTJCZmxvYXRpbmclMkJhcm91bmR8ZW58MHx8fHwxNzQ3OTIwMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student learning online with interactive elements"
                className="w-full h-auto rounded-lg shadow-2xl shadow-indigo-900/30 border border-gray-700"
              />
              
              {/* Floating Elements - Updated for dark theme */}
              <div className="absolute -top-6 -left-6 bg-gray-800 rounded-lg shadow-lg p-4 animate-float border border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-300">Live Session in Progress</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-lg shadow-lg p-4 animate-float-delayed border border-gray-700">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24" className="text-green-500">
                    <rect width="256" height="256" fill="none"/>
                    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-11.2,0l-29.2-28a8,8,0,1,1,11.2-11.6L116,152l52.7-50.4a8,8,0,1,1,11.2,11.6Z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-300">Progress: 85% Complete</span>
                </div>
              </div>
            </div>
            
            {/* Additional glow effect for dark theme */}
            <div className="absolute -inset-2 bg-indigo-500/20 rounded-3xl blur-xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;