import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-16 px-4 transition-all duration-500 ease-in-out">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Welcome to</h1>
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-6">TripGo</h2>
      <p className="max-w-xl mx-auto text-gray-700">
        Your ultimate travel companion! Discover exciting destinations, exclusive deals,
        and seamless booking experience.
      </p>
      <img src="https://trip-go-frontend.vercel.app/assets/headerimg-z9Lx2I3O.png" alt="Travel" className="mx-auto mt-6 max-w-xs hover:scale-105 transform transition-transform duration-300" />
    </section>
  );
};

export default HeroSection;