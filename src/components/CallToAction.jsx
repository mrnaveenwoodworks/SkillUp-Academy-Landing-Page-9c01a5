import React, { useState, useEffect, useRef } from "react";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(true);
  const componentMounted = useRef(true);

  // Ensure component stays visible
  useEffect(() => {
    setIsVisible(true);
    
    return () => {
      componentMounted.current = false;
    };
  }, []);

  return (
    <section 
      className={`py-20 bg-gray-900 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ minHeight: "600px" }} // Ensure minimum height to prevent collapse
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 border border-gray-700">
          <div className="flex flex-col md:flex-row">
            {/* Left side with image - Fixed positioning */}
            <div className="md:w-2/5 relative" style={{ minHeight: "400px" }}>
              <img 
                src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTdHVkZW50JTJCbGVhcm5pbmclMkJvbiUyQmElMkJsYXB0b3AlMkJ3aXRoJTJCYSUyQmNvbmZpZGVudCUyQmV4cHJlc3Npb258ZW58MHx8fHwxNzQ3OTEzODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student learning on a laptop with a confident expression"
                className="absolute inset-0 w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>
            </div>

            {/* Right side with content */}
            <div className="md:w-3/5 p-8 md:p-12 lg:p-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                  Ready to Transform Your Future?
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Join over <span className="font-bold text-indigo-400">100,000 students</span> who have accelerated their careers with our industry-recognized courses. Start your journey today!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-300">Flexible learning schedules</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-300">Expert instructors from top companies</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-300">30-day money-back guarantee</span>
                  </div>
                </div>
                
                <div className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <button 
                    className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-900/50 transform transition duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Browse All Courses
                  </button>
                  <button 
                    className="w-full sm:w-auto px-8 py-4 bg-gray-700 text-indigo-300 font-semibold rounded-lg shadow-lg border border-indigo-500/30 transform transition duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Sign Up Free
                  </button>
                </div>
                
                <p className="mt-6 text-sm text-gray-400">
                  Already a member? <a href="#" className="text-indigo-400 font-medium hover:text-indigo-300">Sign in here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section - Fixed visibility */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 border border-gray-700">
            <div className="text-3xl font-bold text-indigo-400 mb-2">100K+</div>
            <div className="text-gray-300">Students</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 border border-gray-700">
            <div className="text-3xl font-bold text-indigo-400 mb-2">250+</div>
            <div className="text-gray-300">Courses</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 border border-gray-700">
            <div className="text-3xl font-bold text-indigo-400 mb-2">35+</div>
            <div className="text-gray-300">Countries</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 border border-gray-700">
            <div className="text-3xl font-bold text-indigo-400 mb-2">4.8/5</div>
            <div className="text-gray-300">Satisfaction</div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 pointer-events-none opacity-20">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="9" y="9" width="2" height="2" fill="currentColor" className="text-indigo-500"/>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#grid)"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;