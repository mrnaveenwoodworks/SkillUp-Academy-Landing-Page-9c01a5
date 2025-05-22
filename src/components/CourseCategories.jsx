import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

const CourseCategories = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(true);

  // Category data
  const categories = [
    {
      id: 1,
      title: "Technology",
      description: "Master cutting-edge tech skills from web development to AI and machine learning.",
      iconName: "code",
      courseCount: 87,
      backgroundColor: "bg-gray-800",
      textColor: "text-gray-100",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQZXJzb24lMkJjb2RpbmclMkJvbiUyQmxhcHRvcCUyQndpdGglMkJ0ZWNobm9sb2d5JTJCZ3JhcGhpY3N8ZW58MHx8fHwxNzQ3OTEzODU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Business",
      description: "Develop essential business skills including leadership, marketing, and financial analysis.",
      iconName: "briefcase",
      courseCount: 64,
      backgroundColor: "bg-gray-800",
      textColor: "text-gray-100",
      image: "https://images.unsplash.com/photo-1444653389962-8149286c578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxCdXNpbmVzcyUyQnByb2Zlc3Npb25hbHMlMkJpbiUyQm1lZXRpbmclMkJyZXZpZXdpbmclMkJjaGFydHN8ZW58MHx8fHwxNzQ3OTEzODU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Arts & Design",
      description: "Unleash your creativity with courses in graphic design, photography, and digital art.",
      iconName: "palette",
      courseCount: 45,
      backgroundColor: "bg-gray-800",
      textColor: "text-gray-100",
      image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEZXNpZ25lciUyQndvcmtpbmclMkJvbiUyQmRpZ2l0YWwlMkJpbGx1c3RyYXRpb258ZW58MHx8fHwxNzQ3OTEzODYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const tabs = [
    { id: "all", label: "All Categories" },
    { id: "trending", label: "Trending" },
    { id: "popular", label: "Most Popular" },
    { id: "new", label: "New Releases" }
  ];

  useEffect(() => {
    setIsVisible(true);
    return () => {
      // Clean up any animations or transitions if needed
    };
  }, []);

  return (
    <section 
      id="categories" 
      className={`py-16 bg-gray-900 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Explore Our Course Categories</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover courses designed by industry experts to help you master new skills and advance your career
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Category */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 transform transition-all duration-300 hover:scale-105">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="inline-flex items-center bg-gray-800/30 rounded-full px-4 py-1 mb-6">
                  <span className="text-xs font-semibold text-indigo-300">FEATURED CATEGORY</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-100">Data Science & Analytics</h3>
                <p className="mb-6 text-gray-300">
                  Transform your career with in-demand data skills. Learn to analyze complex datasets, 
                  create powerful visualizations, and drive business decisions with data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-gray-800/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-100">35+</div>
                    <div className="text-sm text-gray-400">Courses</div>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-100">200K+</div>
                    <div className="text-sm text-gray-400">Students</div>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-100">4.9/5</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                </div>
                <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25">
                  Explore Data Courses
                </button>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEYXRhJTJCc2NpZW50aXN0JTJCYW5hbHl6aW5nJTJCY2hhcnRzJTJCb24lMkJtdWx0aXBsZSUyQnNjcmVlbnN8ZW58MHx8fHwxNzQ3OTEzODgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Data Science Category"
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              iconName={category.iconName}
              courseCount={category.courseCount}
              backgroundColor={category.backgroundColor}
              textColor={category.textColor}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-800 text-indigo-300 font-medium rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Categories
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
          <p className="text-lg font-medium text-gray-300 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-100">
            {["Google", "Microsoft", "Adobe", "Amazon", "IBM"].map((company) => (
              <img
                key={company}
                src={`https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHwlMjUyNCUyNTdCY29tcGFueSUyNTdEJTJCbG9nbyUyQmluJTJCZ3JheXNjYWxlfGVufDB8fHx8MTc0NzkyMDM2OHww&ixlib=rb-4.1.0&q=80&w=1080`}
                alt={`${company} logo`}
                className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer brightness-200"
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-indigo-400 mb-1">15+</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-indigo-400 mb-1">250+</div>
            <div className="text-gray-300 text-sm">Total Courses</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-indigo-400 mb-1">50+</div>
            <div className="text-gray-300 text-sm">Expert Instructors</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-indigo-400 mb-1">24/7</div>
            <div className="text-gray-300 text-sm">Learning Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;