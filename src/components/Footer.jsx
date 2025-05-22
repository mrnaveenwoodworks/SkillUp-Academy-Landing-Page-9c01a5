import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32" className="text-indigo-400">
                <rect width="256" height="256" fill="none"/>
                <polygon points="12 96 128 32 244 96 128 160 12 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                <polyline points="180 240 180 124.69 128 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                <path d="M216,111.45v54.84a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V111.45" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-indigo-400">SkillUp Academy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering individuals to transform their careers through quality education and practical skills training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="text-gray-300 hover:text-white">
                  <rect width="256" height="256" fill="none"/>
                  <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <path d="M168,88H152a24,24,0,0,0-24,24V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="text-gray-300 hover:text-white">
                  <rect width="256" height="256" fill="none"/>
                  <path d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="text-gray-300 hover:text-white">
                  <rect width="256" height="256" fill="none"/>
                  <circle cx="128" cy="128" r="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <circle cx="180" cy="76" r="16"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="text-gray-300 hover:text-white">
                  <rect width="256" height="256" fill="none"/>
                  <rect x="32" y="32" width="192" height="192" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <line x1="124" y1="120" x2="124" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <line x1="84" y1="120" x2="84" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <path d="M124,148a28,28,0,0,1,56,0v28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  <circle cx="84" cy="80" r="16"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-100">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Courses</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Instructors</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Learning Paths</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Career Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Blog</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-100">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Pricing Plans</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Enterprise Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Become an Instructor</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Affiliate Program</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 text-gray-100">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" className="text-indigo-400">
                    <rect width="256" height="256" fill="none"/>
                    <circle cx="128" cy="64" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                    <path d="M172,139.75c35.44,6.37,60,20.21,60,36.25,0,22.09-46.56,40-104,40S24,198.09,24,176c0-16,24.56-29.88,60-36.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  </svg>
                </div>
                <span className="text-gray-400">
                  123 Learning Way, Education District<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" className="text-indigo-400">
                    <rect width="256" height="256" fill="none"/>
                    <path d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  </svg>
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" className="text-indigo-400">
                    <rect width="256" height="256" fill="none"/>
                    <path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                    <polyline points="224 56 128 144 32 56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  </svg>
                </div>
                <span className="text-gray-400">info@skillupacademy.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-gray-100">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow border border-gray-700"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition duration-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18">
                    <rect width="256" height="256" fill="none"/>
                    <line x1="144" y1="128" x2="80" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                    <path d="M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} SkillUp Academy. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-indigo-400 transition duration-300">Cookie Policy</a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-600">
            <p>Trusted by thousands of learners worldwide. Join our community today!</p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
            <rect width="256" height="256" fill="none"/>
            <line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
            <polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;