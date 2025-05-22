import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseCategories from "./components/CourseCategories";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);

  // Handle smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;

      const targetId = target.getAttribute("href").slice(1);
      const element = document.getElementById(targetId);

      if (element) {
        e.preventDefault();
        const offset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  // Page load animations - Fixed to ensure content remains visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Add fade-in animation to sections without setting opacity to 0 later
      const sections = document.querySelectorAll("section");
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const animateElements = document.querySelectorAll(".animate-on-scroll");
      if (animateElements.length > 0) {
        animateElements.forEach((element) => observer.observe(element));
      }
    }, 600);

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="transition-all duration-700 ease-out bg-gray-900" style={{ opacity: 1, transform: "translateY(0)" }}>
          <Hero />
        </section>

        {/* Course Categories Section */}
        <section className="transition-all duration-700 ease-out bg-gray-800" style={{ opacity: 1, transform: "translateY(0)" }}>
          <CourseCategories />
        </section>

        {/* Testimonials Section */}
        <section className="transition-all duration-700 ease-out bg-gray-900" style={{ opacity: 1, transform: "translateY(0)" }}>
          <Testimonials />
        </section>

        {/* Call To Action Section */}
        <section className="transition-all duration-700 ease-out bg-gray-800" style={{ opacity: 1, transform: "translateY(0)" }}>
          <CallToAction />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

// Cookie Consent Banner Component with Dark Theme
const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg z-50 transform transition-transform duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-300 text-sm">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <a href="/privacy" className="text-indigo-400 hover:text-indigo-300 ml-1">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Accept
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="px-4 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-md hover:bg-gray-600 transition duration-300"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Scroll to Top Button Component with Dark Theme
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default App;