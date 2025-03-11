import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Background Video */}
      <video className="fixed top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted>
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>

      {/* Fixed Dark Overlay */}
      <div className="fixed inset-0 bg-black/50 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-screen text-white text-center px-6">
        <h1 className="text-5xl font-bold">Welcome to Price Tracker</h1>
        <p className="mt-4 text-lg">
          Track product prices, get smart recommendations, and never miss a deal.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link to="/signup" className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
            Get Started
          </Link>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Login
          </Link>
        </div>
      </div>

      {/* Scrollable Sections */}
      <div className="relative bg-white text-black py-10 px-6">
        <section id="about" className="py-10">
          <h2 className="text-3xl font-bold text-center">About Our Service</h2>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            We help you track product prices, get alerts on discounts, and make the best purchase decisions.
          </p>
        </section>

        <section id="reviews" className="py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            See what our users are saying about our price tracking service.
          </p>
        </section>

        <section id="contact" className="py-10">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Have questions? Reach out to us anytime!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
