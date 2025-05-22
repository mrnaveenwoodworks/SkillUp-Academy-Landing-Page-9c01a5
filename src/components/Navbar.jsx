import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32" className="text-indigo-400">
                <rect width="256" height="256" fill="none"/>
                <polygon points="12 96 128 32 244 96 128 160 12 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                <polyline points="180 240 180 124.69 128 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                <path d="M216,111.45v54.84a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V111.45" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-indigo-400">SkillUp Academy</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200">Courses</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200">About Us</a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Sign In / Register Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-indigo-400 font-medium hover:text-indigo-300 transition duration-200">
              Sign In
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-indigo-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-300 font-medium hover:text-indigo-400 hover:bg-gray-700 rounded-md transition duration-200">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-300 font-medium hover:text-indigo-400 hover:bg-gray-700 rounded-md transition duration-200">Courses</a>
            <a href="#" className="block px-3 py-2 text-gray-300 font-medium hover:text-indigo-400 hover:bg-gray-700 rounded-md transition duration-200">Pricing</a>
            <a href="#" className="block px-3 py-2 text-gray-300 font-medium hover:text-indigo-400 hover:bg-gray-700 rounded-md transition duration-200">About Us</a>
            <a href="#" className="block px-3 py-2 text-gray-300 font-medium hover:text-indigo-400 hover:bg-gray-700 rounded-md transition duration-200">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-4 px-4">
              <button className="w-full px-4 py-2 text-indigo-400 font-medium hover:text-indigo-300 transition duration-200 rounded-md hover:bg-gray-700">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;