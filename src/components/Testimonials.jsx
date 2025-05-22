import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../data/testimonialsData";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleTestimonials(testimonialsData.slice(0, 3));
      } else if (width >= 768) {
        setVisibleTestimonials(testimonialsData.slice(0, 2));
      } else {
        setVisibleTestimonials([testimonialsData[activeIndex]]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  const navigateTestimonial = (direction) => {
    setActiveIndex(prev => {
      if (direction === "next") {
        return (prev + 1) % testimonialsData.length;
      }
      return (prev - 1 + testimonialsData.length) % testimonialsData.length;
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-5 bg-indigo-900/50 rounded-full">
            <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              Student Success Stories
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Hear from Our Successful Students
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how <span className="text-indigo-400 font-medium">SkillUp Academy</span> has helped thousands of students transform their careers and achieve their professional goals.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-100 space-y-6">
                <div className="inline-flex items-center bg-gray-800/30 rounded-full px-4 py-1">
                  <span className="text-sm font-medium text-indigo-300">FEATURED STORY</span>
                </div>
                <blockquote className="text-2xl font-light leading-relaxed text-gray-200">
                  "{testimonialsData[0].quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonialsData[0].photo}
                    alt={testimonialsData[0].name}
                    className="w-12 h-12 rounded-full border-2 border-indigo-500"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-100">{testimonialsData[0].name}</h4>
                    <p className="text-gray-300">{testimonialsData[0].role} at {testimonialsData[0].company}</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1496664444929-8c75efb9546f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxTdHVkZW50cyUyQmNvbGxhYm9yYXRpbmclMkJpbiUyQm1vZGVybiUyQndvcmtzcGFjZXxlbnwwfHx8fDE3NDc5MjA4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students collaborating"
                  className="rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-100">More Success Stories</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => navigateTestimonial("prev")}
                className="p-2 rounded-full bg-gray-800 border border-gray-700 shadow-sm hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="text-gray-300">
                  <rect width="256" height="256" fill="none"/>
                  <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                </svg>
              </button>
              <button
                onClick={() => navigateTestimonial("next")}
                className="p-2 rounded-full bg-gray-800 border border-gray-700 shadow-sm hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="text-gray-300">
                  <rect width="256" height="256" fill="none"/>
                  <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-indigo-500 w-6" 
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">93%</div>
            <p className="text-gray-300">Job placement rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">65%</div>
            <p className="text-gray-300">Average salary increase</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">4.8/5</div>
            <p className="text-gray-300">Student satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">14,000+</div>
            <p className="text-gray-300">Career transitions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;